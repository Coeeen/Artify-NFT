import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

import { useMyContext } from '../../store/nfts/main'
import NFT from '../../Components/HomePage/NFT'

//img, name, ownerName, ownerPicture, price, numberLicked

function ExploreCollection() {
  const { dataNormal, fetchNfts } = useMyContext()

  useEffect(() => {
    const fetchNftsData = async () => {
      await fetchNfts()
    }

    fetchNftsData()
  }, [])

  useEffect(() => {
    console.log(dataNormal)
  }, [dataNormal])

  return (
    <div>
      <Header>
        <h1>MOST POPULAR NFT</h1>
        <h2>Top Trending NFTs</h2>
      </Header>
      <NFTContainer>
        {dataNormal &&
          dataNormal.map((data) => (
            <NFT
              id={data._id}
              img={data.img}
              name={data.name}
              ownerName={data.owner}
              ownerPicture={data.ownerImg}
              price={data.price}
              numberLicked={data.numberLikes}
              key={data._id}
            />
          ))}
      </NFTContainer>
    </div>
  )
}

export default ExploreCollection

const Header = styled.div`
  h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    text-align: center;

    @media (max-width: 760px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    margin: 0px 0px 50px 0px;
    font-weight: lighter;
    color: white;
    text-align: center;
    margin: 0;
  }
  @media (max-width: 760px) {
    margin-top: 30rem;
  }
`

const NFTContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 5rem;
`
