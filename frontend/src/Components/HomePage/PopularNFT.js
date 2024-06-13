import React, { useEffect } from 'react'
import { useMyContext } from '../../store/nfts/main'
import styled from 'styled-components'
import NFT from '../mainComponents/NFT'

function PopularNFT() {
  const { dataPopular, fetchMostPopularNfts } = useMyContext()

  useEffect(() => {
    const fetchNftsData = async () => {
      await fetchMostPopularNfts()
    }

    fetchNftsData()
  }, [])

  useEffect(() => {
    console.log(dataPopular)
  }, [dataPopular])

  return (
    <PopularNFTStyle>
      <Heading>
        <h1>POPULAR NFT</h1>
        <h3>FOR TODAY {new Date().toLocaleDateString()} </h3>
      </Heading>
      <PopularNFTContainer>
        {dataPopular &&
          dataPopular.map((el) => (
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
      </PopularNFTContainer>
    </PopularNFTStyle>
  )
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
`

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
`

const PopularNFTContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`
export default PopularNFT
