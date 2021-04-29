import React, { useState } from "react";
import useSignupForm from "../Hooks/useSignupForm";
import validateSignup from "../Services/validateSignup";

function Signup() {
  const {
    inputName,
    signupErrors,
    handleSignupChange,
    handleSignupSubmit,
  } = useSignupForm(validateSignup);

  // console.log(inputName);

  return (
    <div>
      <form onSubmit={(e) => handleSignupSubmit(e)}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => handleSignupChange(e)}
        />
      </form>
      <span className="signup-errors">{signupErrors.name}</span>
    </div>
  );
}

export default Signup;
