import React from "react";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <FooterStyle>
      <FooterSocials>
        <h1>Artify</h1>
        <div>
          <ul>
            <li>Account Options</li>
            <li>Order History</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Privacy Policy</li>
            <li>Guides and Tutorials</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Abaut us</li>
            <li>Faqs</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Press and media</li>
            <li>Affilates</li>
          </ul>
        </div>
      </FooterSocials>
      <span>
        <Line />
      </span>
      <IconsContainer>
        <Icons>
          <BsFacebook />
        </Icons>
        <Icons>
          <BsYoutube />
        </Icons>
        <Icons>
          <BsTwitter />
        </Icons>
        <Icons>
          <BsGoogle />
        </Icons>
      </IconsContainer>
      <span>
        <p>&copy; Made by Coeen</p>
      </span>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.div`
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.28) 100%
  );

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.9rem;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
  h1 {
    color: #fff;
    font-family: Outfit;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    @media (max-width: 1280px) {
      display: none;
    }
  }
  li {
    color: #fff;
    text-align: center;
    font-family: Outfit;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.3px;
    text-decoration-line: underline;
    text-transform: uppercase;
    margin: 10px;
    @media (max-width: 1280px) {
      font-size: 10px;
      letter-spacing: none;
      margin: 10px 2px;
    }
  }
  ul {
    list-style: none;
  }
`;
const Line = styled.div`
  height: 1px;
  background-color: white;
  width: 80%;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  scale: 120%;
  color: white;
  margin: 1rem 2rem 0rem 2rem;
  cursor: pointer;
  @media (max-width: 1280px) {
    scale: 100%;
  }
`;
