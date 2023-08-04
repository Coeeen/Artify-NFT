import React from "react";
import styled from "styled-components";
import NyanCatGif from "../../img/Svg/nyan-cat.gif";

function ExploreHome() {
  return (
    <ExploreHomeStyle>
      <h1>
        Explore <span>Exclusive</span> NFTs In Subdirectory
      </h1>
      <img src={NyanCatGif} alt="GIF"></img>
    </ExploreHomeStyle>
  );
}

export default ExploreHome;

const ExploreHomeStyle = styled.div`
  h1 {
    font-size: 5rem;
    margin: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    text-align: center;
    max-width: 40%;
    position: absolute;
    @media (max-width: 1680px) {
      max-width: 50%;
    }
    @media (max-width: 1280px) {
      max-width: 100%;
      font-size: 4rem;
    }
  }
  span {
    background: linear-gradient(to right, #507ded, #e13e73);
    background-clip: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-background-clip: text;
    color: transparent;
  }
  img {
    width: 100%;
    height: 45rem;
    @media (max-width: 760px) {
      display: none;
    }
  }
`;
