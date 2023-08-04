import React from "react";
import styled from "styled-components";
import NFT from "../HomePage/NFT";

//id, img, name, ownerName, ownerPicture, price, numberLicked

function SimilarNFT({ similarNftCollection }) {
  return (
    <SimilarNFTStyle>
      {similarNftCollection.map((el) => (
        <NFT
          id={el.id}
          img={el.img}
          name={el.name}
          ownerName={el.ownerName}
          ownerPicture={el.ownerPicture}
          price={el.price}
          numberLicked={el.numberLikes}
          key={el.id}
        />
      ))}
    </SimilarNFTStyle>
  );
}

export default SimilarNFT;

const SimilarNFTStyle = styled.div`
  width: 100%;
  height: 45rem;
  background-color: #0d0d15;
  margin: 5rem 0rem;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
    flex-direction: column;
  }
`;
