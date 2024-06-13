import React from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import HomeSVG from '../../img/Svg/Home.json'

import ButtonJoin from '../mainComponents/ButtonJoin'
import ButtonExplore from '../mainComponents/ButtonExplore'

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
          <ButtonJoin />
          <ButtonExplore />
        </div>
      </Headers>
      <LottieStyle>
        <Lottie animationData={HomeSVG} />;
      </LottieStyle>
    </MainHome>
  )
}

export default Home

const MainHome = styled.div`
  display: flex;
  height: 30rem;
  margin: 2rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`

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
`

const LottieStyle = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    display: none;
  }
`
