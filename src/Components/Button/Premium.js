import React, { useState } from "react";
import { useSelector } from "react-redux";

const Premium = () => {
  const [theme, setTheme] = useState(light);
  const light = {
    body: "#E2E2E2",
    text: "#363537",
    toggleBorder: "#FFF",
    gradient: "linear-gradient(#39598A, #79D7ED)",
  };

  const dark = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
  };

  const totalAmount = useSelector((state) => state.expense.totalAmount);
  const themeChangeHandler = () => {
    if (theme === light) {
      setTheme(dark);
      console.log("dark");
    } else {
      setTheme(light);
    }
  };
  return (
    <div>
      {totalAmount > 2000 && (
        <button onClick={themeChangeHandler}>Activate Premium</button>
      )}
    </div>
  );
};

export default Premium;
