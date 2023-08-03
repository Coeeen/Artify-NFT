import React from "react";
import styled from "styled-components";
import NFT from "./NFT";

import nft13 from "../../img/Nft/Nft13.jpg";
import nft15 from "../../img/Nft/Nft15.jpg";
import nft17 from "../../img/Nft/Nft17.jpg";

import OwnerOne from "../../img/creators/model1.jpg";
import OwnerTwo from "../../img/creators/model2.jpg";
import OwnerThree from "../../img/creators/model3.jpg";

function PopularNFT() {
  return (
    <PopularNFTStyle>
      <Heading>
        <h1>POPULAR NFT</h1>
        <h3>FOR TODAY {new Date().toLocaleDateString()} </h3>
      </Heading>
      <PopularNFTContainer>
        <NFT
          img={nft15}
          name={"BABY BEAR #120"}
          ownerName={"#PixelNinja"}
          ownerPicture={OwnerOne}
          price="4.99$"
          numberLicked={999}
        />
        <NFT
          img={nft17}
          name={" COOL SKULL #293"}
          ownerName={"#TechnoGuru"}
          ownerPicture={OwnerTwo}
          price="4.99$"
          numberLicked={776}
        />
        <NFT
          img={nft13}
          name={" CREEPY SKULL #293"}
          ownerName={"#GalacticJester"}
          ownerPicture={OwnerThree}
          price="4.99$"
          numberLicked={2136}
        />
      </PopularNFTContainer>
    </PopularNFTStyle>
  );
}

const PopularNFTStyle = styled.div`
  width: 100%;
  height: 45rem;
  background-color: #0d0d15;
  margin-top: 5rem;
  text-align: center;
  color: white;
  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
  }
`;

const Heading = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 1rem;
    margin: 0px 0px 50px 0px;
    font-weight: lighter;
  }
`;

const PopularNFTContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
export default PopularNFT;
