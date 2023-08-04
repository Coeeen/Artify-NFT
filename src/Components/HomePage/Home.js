import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import HomeSVG from "../../img/Svg/Home.json";
import { AiFillHome } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <MainHome>
      <Headers>
        <h1>
          DISCOVER
          <br /> AND COLLECT <br /> <span>UNSUAL</span> NFTs
        </h1>
        <h3>Your Haven For Unique Digital Artwork</h3>
        <div>
          <Link to="register">
            <JoinUsButton>
              <span>{<AiFillHome />} </span> JOIN US
            </JoinUsButton>
          </Link>
          <Link to="explore">
            <ExploreButton>
              <span>
                EXPLORE{"   "}
                <span>{<BsFillRocketTakeoffFill />}</span>
              </span>
            </ExploreButton>
          </Link>
        </div>
      </Headers>
      <LottieStyle>
        <Lottie animationData={HomeSVG} />;
      </LottieStyle>
    </MainHome>
  );
}

export default Home;

const MainHome = styled.div`
  display: flex;
  height: 30rem;
  margin: 2rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;

  color: white;

  h1 {
    font-size: 4rem;
    margin: 1rem 0rem 0.1rem 0rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }

  span {
    background: linear-gradient(to right, #c18bdc, #e56333);
    -webkit-background-clip: text;
    background-clip: inset 0 0 6px rgba(0, 0, 0, 0.1);
    color: transparent;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  @media (max-width: 1280px) {
    h1 {
      font-size: 4rem;
    }
    h3 {
      font-size: 0.8rem;
      font-weight: 400;
      margin: 0 0 1rem 0;
    }
  }
`;

const LottieStyle = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    display: none;
  }
`;

const JoinUsButton = styled.button`
  width: 10rem;
  color: white;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 5px #c486ca;
  font-family: "Outfit";
  font-weight: bold;
  font-size: 1rem;
  padding: 1.2rem;
  cursor: pointer;
  border: none;
  span {
    color: white;
    scale: 2rem;
  }
  @media (max-width: 1280px) {
    width: 5 rem;
    padding: 1rem;
  }
`;

const ExploreButton = styled.button`
  width: 10rem;
  color: black;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 5px #fff;
  padding: 1.2rem;
  cursor: pointer;
  margin-left: 8rem;
  font-family: "Outfit";
  font-weight: bolder;
  border: none;
  font-size: 1rem;

  span {
    color: black;
    scale: 2rem;
  }
`;
