import React, { useEffect, useState } from "react";
import SkipButton from "../UserComponents/SignUpComponents/SkipButton";
import LogoAndOffers from "../UserComponents/SignUpComponents/LogoAndOffers";
import { TextField } from "@mui/material";
import InputField from "../UserComponents/SignUpComponents/InputField";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [displayNameError, setDisplayNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayEmailError, setDisplayEmailError] = useState(false);
  const [displayContactError, setDisplayContactError] = useState(false);
  const [displayPasswordError, setDisplayPasswordError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(
    function checkIfPasswordMatches() {
      if (!confirmPassword) return;
      if (password === confirmPassword) {
        setDisplayPasswordError(false);
      }
      if (password !== confirmPassword) {
        setDisplayPasswordError(true);
      }
    },
    [password, confirmPassword]
  );

  useEffect(
    function checkIfPasswordMatches() {
      if (!email) return;
      function isValidEmail(email) {
        // Regular expression for validating an email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
      }
      // Example usage:
      if (isValidEmail(email)) {
        setDisplayEmailError(false);
        // console.log("Valid email address");
      } else {
        setDisplayEmailError(true);
        // console.log("Invalid email address");
      }
    },
    [email]
  );

  async function performSignUp() {
    console.log(name, email, password, confirmPassword, contactNo);
    if (!name) {
      setDisplayNameError(true);
      return;
    }
    if (!email) {
      removeAllErrors();
      setDisplayEmailError(true);
      return;
    }
    if (!password && !confirmPassword) {
      removeAllErrors();
      setDisplayPasswordError(true);
      return;
    }

    if (!contactNo) {
      removeAllErrors();
      setDisplayContactError(true);
    }
    if (name && email && password && confirmPassword && contactNo) {
      removeAllErrors();
      const data = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        contactNo: contactNo,
      };
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send updated data as JSON
      });
      const response = await res.json();
      console.log(response);
      if (response.message !== "User successfully registered!") {
        setRegisterError(true);
      }
      if (response.message === "User successfully registered!") {
        navigate("/");
      }
    }
  }
  function removeAllErrors() {
    setDisplayEmailError(false);
    setDisplayPasswordError(false);
    setDisplayNameError(false);
    setDisplayContactError(false);
  }
  return (
    <>
      <div className="bg-[#eeeef1] h-svh  flex flex-col justify-center items-center ">
        <div className="bg-white rounded-md md:w-[24%] w-[95%] my-2 md:my-4 md:px-[50px] md:py-8 flex flex-col ">
          {/* <SkipButton /> */}
          <LogoAndOffers />
          <div className="md:py-10 py-3 flex flex-col justify-center items-center gap-5">
            <InputField runFunction={setName} type="full name" />
            {displayNameError === true && (
              <p className="text-red-500">Enter name</p>
            )}
            <InputField runFunction={setEmail} type="email" />
            {displayEmailError === true && (
              <p className="text-red-500">Enter valid email address</p>
            )}
            <InputField runFunction={setPassword} type="password" />
            <InputField
              runFunction={setConfirmPassword}
              type="confirm password"
            />
            {displayPasswordError === true && (
              <p className="text-red-500">Password doesn't match.</p>
            )}

            <InputField runFunction={setContactNo} type="contact no." />
            {displayContactError === true && (
              <p className="text-red-500">Enter valid contact No.</p>
            )}
            <button
              onClick={performSignUp}
              className="bg-[#0078ae] uppercase font-semibold text-white px-4 py-4 rounded-md md:w-[80%]"
            >
              Register
            </button>
            {registerError === true && (
              <p className="text-red-500">Registeration Failed. try again!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
