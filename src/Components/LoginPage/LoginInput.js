import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import LoginAnimation from "../../img/Svg/Login.json";

function LoginInput() {
  return (
    <LoginInputStyle>
      <h1>Welcome Back!</h1>
      <h2>Login in To Your Account</h2>
      <LottieStyle>
        <Lottie
          animationData={LoginAnimation}
          style={{ height: "300px", width: "300px" }}
        ></Lottie>
        <input type="text" placeholder="E-mail"></input>
        <input type="text" placeholder="Password"></input>
        <button>LOG IN</button>
      </LottieStyle>
    </LoginInputStyle>
  );
}

export default LoginInput;

const LoginInputStyle = styled.div`
  margin: 1rem;
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
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
  input[type="text"],
  textarea {
    background-color: #141420;
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    background-color: 141420;
    color: white;
    font-family: "Outfit";
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
    margin: 1rem 0rem;
    cursor: pointer;
  }
`;
