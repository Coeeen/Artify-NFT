import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarStyle>
      <h1>ARTIFY</h1>
      <div>
        <ul>
          <li>HOME</li>
          <li>EXPLORE</li>
          <li>CONTACT</li>
          <li>REGISTER</li>
          <li>LOGIN</li>
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
  /* z-index: 10;
  position: sticky;
  top: 0; */

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 30px;
    letter-spacing: 0.5rem;
    @media (max-width: 1568px) {
      font-size: 2rem;
    }
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
    font-size: 2rem;
    cursor: pointer;
    margin: 0 3rem;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    li {
      font-size: 1.5rem;
    }
  }
`;
