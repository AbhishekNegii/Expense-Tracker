import React from "react";
import Premium from "../Button/Premium";
import Card from "../Layout/Card";
import Logout from "../Logout";
import ExpenseList from "./ExpenseList";
import Expenses from "./Expenses";

const ExpenseShow = () => {
  return (
    <div>
      <Card>
        <Premium/>
        <Logout />
        <Expenses />
      </Card>
      <Card>
        <ExpenseList />
      </Card>
    </div>
  );
};

export default ExpenseShow;
