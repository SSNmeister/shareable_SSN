import React, { useEffect, useState } from "react";
import "./createaccount.css";
import { NavLink } from "react-router-dom";
import backButton from "../../Assets/universal/backbutton.svg";
import username from "../../Assets/createaccount/username.svg";
import email from "../../Assets/createaccount/email.svg";
import password from "../../Assets/createaccount/password.svg";

const CreateAccount1 = ({
  setUsercredentialscreated,
  setCharSelect,
  setUsername,
}) => {
  const [usernameInput, setUsernameInput] = useState("");

  const handleCreateAccount = () => {
    setUsername(usernameInput);
    console.log(usernameInput);
  };

  return (
    <div className="create--account--main--container mt46">
      <NavLink to="/">
        <img src={backButton} className="back--button" />
      </NavLink>
      <p className="create--account--header--font mb36 fs32 fw700 white">
        Create account
      </p>

      <div className="universal--input--forms mb24">
        <img src={username} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="username"
          className="create--account--input ml12"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        />
      </div>
      <span className="create--account--font1 fs16 fw700 white mb8">
        Create password
      </span>
      <div className="universal--input--forms mb24">
        <img src={password} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="password"
          className="create--account--input ml12"
        />
      </div>
      <div className="universal--input--forms mb36">
        <img src={password} className="user--login--input--icon ml12" />
        <input
          type="text"
          placeholder="password"
          className="create--account--input ml12"
        />
      </div>
      <button
        className="user--create--account--button"
        onClick={() => {
          setUsercredentialscreated(true);
          setCharSelect("step1");
          handleCreateAccount();
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount1;
