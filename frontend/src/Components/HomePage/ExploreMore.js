import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'

import { ExploreMoreData } from '../Database'
import ExploreMoreLottie from '../../img/Svg/ExploreMore.json'
import NFT from '../mainComponents/NFT'
import { Link } from 'react-router-dom'

function ExploreMore() {
  return (
    <ExploreMoreStyle>
      <h1>Explore More</h1>
      <h2>ENDLESS CHOICES</h2>
      <ExploreMoreContainer>
        {ExploreMoreData.map((data, index) => (
          <NFT
            id={data.id}
            img={data.img}
            name={data.name}
            ownerName={data.ownerName}
            ownerPicture={data.ownerPicture}
            price={data.price}
            numberLicked={data.numberLikes}
            specialStyle={index >= 4 && index <= 7}
            key={index}
          ></NFT>
        ))}
      </ExploreMoreContainer>
      <SearchForMoreStyle>
        <div>
          <Link to="explore">
            <button>SEARCH FOR MORE</button>
            <Lottie animationData={ExploreMoreLottie}></Lottie>
          </Link>
        </div>
      </SearchForMoreStyle>
    </ExploreMoreStyle>
  )
}

export default ExploreMore

const ExploreMoreStyle = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    text-align: center;
  }
  h2 {
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    margin: 15px 0px;
    color: white;
    text-align: center;
  }
`
const ExploreMoreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    text-align: center;
  }

  & > div:nth-child(n + 5) {
    filter: blur(10px);
    -webkit-filter: blur(10px);
    button {
      cursor: auto;
    }
  }
`
const SearchForMoreStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem;
  button {
    width: 25rem;
    color: #fff;
    border-radius: 20px;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    padding: 1.5rem;
    cursor: pointer;
    font-family: 'Outfit';
    font-weight: bolder;
    font-size: 1.7rem;
    font-weight: 400;
    border: 1px solid white;
    position: absolute;
    z-index: 10;
  }
  div {
    width: 25rem;
    height: 5rem;
  }
`
