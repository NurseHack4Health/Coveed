import React from "react";
import "./PhoneLogin.css";

const PhoneLogin = ({ signup }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <input name="phoneNumber" type="tel" placeholder="Phone Number" />

        {signup ? (
          <input
            id="signup-submit"
            type="submit"
            className="signup-submit"
            key="signup-submit"
            value="Sign Up"
          />
        ) : (
          <input
            id="signup-submit"
            type="submit"
            className="signup-submit"
            key="signup-submit"
            value="Log In"
          />
        )}
      </form>
    </>
  );
};

export default PhoneLogin;
