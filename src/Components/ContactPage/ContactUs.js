import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";

import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { BsClockFill } from "react-icons/bs";

import ContactSVG from "../../img/Svg/ContactUsAnimation.json";
function ContactUs() {
  return (
    <>
      <HeaderStyle>
        <h1>CONTACT US</h1>
        <h2>
          Feel free to contact us any time. We will get back to you as soon as
          we can
        </h2>
      </HeaderStyle>

      <ContactUsStyle>
        <ContactInfo>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Password"></input>
          <input type="text" placeholder="Message"></input>
          <button>SEND MESSAGE</button>
        </ContactInfo>
        <ContactCard>
          {" "}
          <Card>
            <Lottie
              animationData={ContactSVG}
              style={{
                height: "400px",
                width: "400px",
                position: "absolute",
                bottom: "-10%",
                right: "0%",
                opacity: "70%",
              }}
            ></Lottie>
            <h1>You can reach us by...</h1>
            <ul>
              <li>
                <span>
                  <HiMail size={50} />
                  <p>info@getintouch.com</p>
                </span>
              </li>
              <li>
                <span>
                  <BsTelephoneFill size={50} />
                  <p>+48 511 439 851</p>
                </span>
              </li>
              <li>
                <span>
                  <ImOffice size={50} />
                  <p>Gdańsk nowaka 28</p>
                </span>
              </li>
              <li>
                <span>
                  <BsClockFill size={50} />
                  <p>8:00 - 16:00</p>
                </span>
              </li>
            </ul>
          </Card>
        </ContactCard>
      </ContactUsStyle>
    </>
  );
}

export default ContactUs;

const HeaderStyle = styled.div`
  h1 {
    font-size: 5rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    background: linear-gradient(to right, #c18bdc, #e56333);
    -webkit-background-clip: text;
    background-clip: inset 0 0 6px rgba(0, 0, 0, 0.1);
    color: transparent;
    text-align: center;
    margin-top: 2rem;
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

const ContactUsStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 34.2rem;
`;

const ContactCard = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
`;

const Card = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.28) 100%
  );
  border-radius: 2rem 2rem 0rem 0rem;
  width: 100%;
  height: 90%;
  position: relative;
  margin: 2rem;
  @media (max-width: 780px) {
    margin: 0rem;
  }

  h1 {
    font-size: 1.4rem;
    margin: 2rem;
    font-weight: 400;
    letter-spacing: 5px;
    color: white;
    text-align: left;
  }
  ul {
    list-style: none;
  }
  li {
    text-align: left;
    margin: 10px 0px;
    color: white;
  }
  span {
    display: flex;
    align-items: center;
  }
  p {
    font-size: 1.2rem;
    margin-left: 20px;
    @media (max-width: 780px) {
      margin-left: 20px;
      font-size: 1rem;
    }
  }
  svg {
    @media (max-width: 1480px) {
      display: none;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
  align-items: center;
  flex: 2;
  input[type="text"],
  textarea {
    width: 60%;
    padding: 12px 20px;
    margin: 20px 10px;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: white;
    font-family: "Outfit";
    text-align: center;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 12rem;
    color: white;
    border-radius: 20px;
    margin-top: 1rem;
    background-color: transparent;
    box-shadow: 0 0 5px #fff;
    font-family: "Outfit";
    font-weight: bold;
    font-size: 1rem;
    padding: 1.2rem;
    cursor: pointer;
    border: none;
  }
`;
