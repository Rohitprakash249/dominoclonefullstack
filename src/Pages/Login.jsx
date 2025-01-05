import React, { useState } from "react";
import SkipButton from "../UserComponents/LoginComponents/SkipButton";
import LogoAndOffers from "../UserComponents/LoginComponents/LogoAndOffers";
import { TextField } from "@mui/material";
import InputFieldEmail from "../UserComponents/LoginComponents/InputFieldEmail";
import InputFieldPassword from "../UserComponents/LoginComponents/InputFieldPassword";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  async function performLogin() {
    setShowError(false);
    if (!email) {
      setErrorMessage("Enter email");
      setShowError(true);
    }

    if (!password) {
      setErrorMessage("Enter password");
      setShowError(true);
    }

    if (email && password) {
      const data = {
        email: email,
        password: password,
      };
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send updated data as JSON
      });
      const response = await res.json();
      if (response.message === "login failed") {
        setErrorMessage("Enter correct email or password.");
        setShowError(true);
      }
      if (response.message === "login successfull") {
        navigate("/");
      }
    }
  }
  return (
    <>
      <div className="bg-[#eeeef1] h-svh  flex flex-col justify-center items-center ">
        <div className="bg-white rounded-md md:w-[24%] my-2 md:my-4 md:px-[50px] md:py-8 flex flex-col ">
          <SkipButton />
          <LogoAndOffers />
          <div className="md:py-10 py-3 flex flex-col justify-center items-center gap-5">
            <InputFieldEmail setEmail={setEmail} type="email" />
            <InputFieldPassword setPassword={setPassword} type="password" />
            {showError === true && (
              <p className="text-red-500 duration-500">{errorMessage}</p>
            )}
            <button
              onClick={performLogin}
              className="bg-[#0078ae] text-white px-4 py-4 rounded-md md:w-[80%]"
            >
              Login
            </button>
            <p onClick={() => navigate("/signup")} className="">
              Don't have an account? sign up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
