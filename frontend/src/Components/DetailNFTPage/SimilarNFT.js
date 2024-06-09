import React from 'react'
import styled from 'styled-components'
import NFT from '../HomePage/NFT'

//id, img, name, ownerName, ownerPicture, price, numberLicked

function SimilarNFT({ similarNftCollection }) {
  return (
    <SimilarNFTStyle>
      <Heading>
        <h1>SIMILAR NFT</h1>
        <h2>Discover NFTs Alike</h2>
      </Heading>
      <NftContainer>
        {similarNftCollection.map((el) => (
          <NFT
            id={el._id}
            img={el.img}
            name={el.name}
            ownerName={el.owner}
            ownerPicture={el.ownerImg}
            price={el.price}
            numberLicked={el.numberLikes}
            key={el._id}
          />
        ))}
      </NftContainer>
    </SimilarNFTStyle>
  )
}

export default SimilarNFT

const SimilarNFTStyle = styled.div`
  width: 100%;
  height: 45rem;
  background-color: #0d0d15;
  margin: 5rem 0rem;
  text-align: center;
  color: white;

  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
    flex-direction: column;
  }
`
const Heading = styled.div`
  h1 {
    padding: 10px;
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
`

const NftContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
`
