import React, { useState } from "react";
import Lottie from "lottie-react";
import styled from "styled-components";

import Password from "../../img/Svg/Password.json";
import Register from "../../img/Svg/Register.json";
function ForgotPassword() {
  const [resetPassword, setResetPassword] = useState(true);
  const [emailValue, setEmailValue] = useState();
  function SendEmail() {
    setResetPassword(!true);
    setEmailValue("");
  }
  return (
    <>
      {(resetPassword && (
        <ForgotPasswordStyle>
          <h1>Forgot your Password?</h1>
          <h2>No problem! We will reset it via Email</h2>
          <LottieStyle>
            <Lottie
              animationData={Password}
              style={{ height: "300px", width: "300px" }}
            ></Lottie>
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              pattern=".+@globex\.com"
            ></input>
            <button onClick={() => SendEmail()}>Reset Password</button>
          </LottieStyle>
        </ForgotPasswordStyle>
      )) || (
        <ForgotPasswordStyle>
          <h1>Check your Email</h1>
          <h2>Type your code here!</h2>
          <LottieStyle>
            <Lottie
              animationData={Register}
              style={{ height: "300px", width: "300px" }}
            ></Lottie>
            <input
              type="password"
              placeholder="Code"
              maxlength="5"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            ></input>
            <button onClick={() => SendEmail()}>Reset Password</button>
          </LottieStyle>
        </ForgotPasswordStyle>
      )}
    </>
  );
}

export default ForgotPassword;

const ForgotPasswordStyle = styled.div`
  margin: 1rem;
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    background: linear-gradient(to right, #f44956, #8bbfdb);
    -webkit-background-clip: text;
    background-clip: inset 0 0 10px rgba(0, 0, 0, 1);
    color: transparent;
    text-align: center;
  }
  h2 {
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    margin: 15px 0px;
    color: white;
    text-align: center;
  }
`;
const LottieStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input,
  textarea {
    background-color: #141420;
    width: 20%;
    padding: 12px 20px;
    margin-top: 3rem;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    background-color: 141420;
    color: white;
    font-family: "Outfit";
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  button {
    border-radius: 26px;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.25);
    font-family: "Outfit";
    padding: 1.5rem;
    width: 10rem;
    margin: 2rem 0rem;
    cursor: pointer;
  }
  div {
    background-color: #141420;
    border-radius: 20px;
    height: auto;
    max-width: fit-content;
  }
`;
