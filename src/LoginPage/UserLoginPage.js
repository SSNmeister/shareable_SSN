import React from "react";
import passwordKey from "../Assets/userloginpage/passwordkey.svg";
import emailIcon from "../Assets/userloginpage/emailicon.svg";
import "./userloginpage.css";

const UserLoginPage = () => {
  return (
    <div className="user--login--page--container">
      <p className="user--login--page--header mb36 fw700 fs32 m0 mt46">Login</p>

      <div className="universal--input--forms mb24">
        <img src={emailIcon} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="email"
          className="user--login-input ml12"
        />
      </div>
      <div className="universal--input--forms">
        <img src={passwordKey} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="password"
          className="user--login-input ml12 fw400 fs16"
        />
      </div>

      <p className="user--login--page--no--account--header">
        Don't have an account yet?
      </p>
      <div className="user--login--page--signup--button fw700 fs24 mt20 br4">
        Sign Up
      </div>
    </div>
  );
};

export default UserLoginPage;
