import React, { useRef } from "react";
import "./Login.css"

const Login = () => {
  let emailidInputref = useRef("");
  let passwordInputRef = useRef("");
  let confirmPaswordInputRef = useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submit");

    const enteredEmail = emailidInputref.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPaswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: enteredConfirmPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log(enteredEmail, "succesfully signed up");
          return resp.json();
        } else {
          resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then(() => {});
  };
  return (
    <div class="form">
      <form onSubmit={onSubmitHandler}>
        <div class="title"> Sign Up </div>
        <div class="input-container ic1">
          <input
            id="Email-Id"
            type="text"
            class="input"
            required
            ref={emailidInputref}
          />
          <div class="cut"></div>
          <label class="placeholder">
            Email-Id
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="password"
            class="input"
            type="password"
            ref={passwordInputRef}
            required
          />
          <div class="cut"></div>
          <label class="placeholder">
            Password
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="confirmPassword"
            class="input"
            type="password"
            ref={confirmPaswordInputRef}
            required
          />
          <div class="cut"></div>
          <label  class="placeholder">
            Confirm Password
          </label>
        </div>
        <button type="text" class="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
