import React from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsInfoSquareFill } from "react-icons/bs";

function WeAssure() {
  return (
    <WeAssureStyle>
      <AssureText>
        <AssureTrading>
          <span>
            <FaWallet />
          </span>
        </AssureTrading>
        <h1>Trading</h1>
        <p>
          Explore the NFT marketplace to buy, sell, and exchange digital assets
        </p>
      </AssureText>
      <AssureText>
        <AssureSecurity>
          <span>
            <BsShieldFillCheck />
          </span>
        </AssureSecurity>
        <h1>Security</h1>
        <p>
          Trust our robust security measures to protect your valuable NFT
          investments
        </p>
      </AssureText>
      <AssureText>
        <AssureCollecting>
          <span>
            <BsFillBookmarkFill />
          </span>
        </AssureCollecting>
        <h1>Collecting</h1>
        <p>Create and enjoy your unique NFT collection of digital artworks</p>
      </AssureText>
      <AssureText>
        <AssureDataSet>
          <span>
            <BsInfoSquareFill />
          </span>
        </AssureDataSet>
        <h1>Dataset</h1>
        <p>
          {" "}
          Access valuable insights and statistics with our comprehensive NFT
          dataset
        </p>
      </AssureText>
    </WeAssureStyle>
  );
}

const WeAssureStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1rem;

  span {
    scale: 250%;
    color: white;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    margin-top: 10rem;
  }
`;

const AssureTrading = styled.div`
  height: 5rem;
  background-color: #341e57;
  border-radius: 20px;
  box-shadow: 0 0 15px 8px #341e57;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssureSecurity = styled.div`
  height: 5rem;
  background-color: #1b292c;
  border-radius: 20px;
  box-shadow: 0 0 15px 8px #1b292c;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssureCollecting = styled.div`
  height: 5rem;
  background-color: #d96f68;
  border-radius: 20px;
  box-shadow: 0 0 15px 8px #d96f68;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssureDataSet = styled.div`
  height: 5rem;
  background-color: #c4c5fd;
  border-radius: 20px;
  box-shadow: 0 0 15px 8px #c4c5fd;
  width: 6rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AssureText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  p {
    max-width: 200px;
    font-weight: lighter;
    margin-top: 0;
    @media (max-width: 1280px) {
      margin-bottom: 5rem;
    }
  }
  h1 {
    margin-bottom: 1rem, 0rem, 0rem, 0rem;
  }
`;
export default WeAssure;
