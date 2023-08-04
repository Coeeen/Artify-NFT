import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <NavbarStyle>
      <StyledLink to="/">
        <h1>ARTIFY</h1>{" "}
      </StyledLink>
      <div>
        <ul>
          <StyledLink to="/">
            <li>HOME</li>
          </StyledLink>
          <StyledLink to="/explore">
            <li>EXPLORE</li>
          </StyledLink>
          <StyledLink to="/contact">
            <li>CONTACT</li>
          </StyledLink>
          <StyledLink to="/register">
            <li>REGISTER</li>
          </StyledLink>
          <StyledLink to="/login">
            <li>LOGIN</li>
          </StyledLink>
        </ul>
      </div>
    </NavbarStyle>
  );
}

export default Navbar;

const NavbarStyle = styled.div`
  display: flex;
  color: white;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 30px;
    letter-spacing: 0.5rem;
    cursor: pointer;
  }

  div {
    flex: 1;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 3rem;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 3rem;
    }

    li {
      font-size: 1rem;
      margin: 0 1rem;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 0.9rem;
      margin: 0px 0px 0px 30px;
    }

    li {
      font-size: 0.7rem;
      margin: 0 0.5rem;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;
