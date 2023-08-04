import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styled from "styled-components";

import { PuppyNFT } from "../Database";
import { MonkeyNFT } from "../Database";
import NFT from "../HomePage/NFT";

function SearchBy() {
  return (
    <SearchByStyle>
      <Header>
        <h1>Quick NFT Content Check</h1>
        <h2>find your favourite one</h2>
      </Header>
      <SubHeader>SWEET AND SCARRY PUPPIES</SubHeader>
      <Splide
        options={{
          perPage: 4,
          type: "loop",
          pagination: false,
          keyboard: true,
          lazyLoad: true,
          speed: 10000,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },

            1024: {
              perPage: 3,
            },
          },
        }}
      >
        {PuppyNFT.map((data) => (
          <SplideSlide key={data.id}>
            <NFT
              id={data.id}
              img={data.img}
              ownerName={data.ownerName}
              ownerPicture={data.ownerPicture}
              price={data.price}
              numberLicked={data.numberLikes}
            />
          </SplideSlide>
        ))}
      </Splide>

      <SubHeader>Monkey with drip</SubHeader>
      <Splide
        options={{
          perPage: 4,
          type: "loop",
          pagination: false,
          keyboard: true,
          lazyLoad: true,
          speed: 10000,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },

            1024: {
              perPage: 3,
            },
          },
        }}
      >
        {MonkeyNFT.map((data) => (
          <SplideSlide key={data.id}>
            <NFT
              id={data.id}
              img={data.img}
              ownerName={data.ownerName}
              ownerPicture={data.ownerPicture}
              price={data.price}
              numberLicked={data.numberLikes}
            />
          </SplideSlide>
        ))}
      </Splide>
    </SearchByStyle>
  );
}

export default SearchBy;

const SearchByStyle = styled.div`
  .splide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Header = styled.h3`
  h1 {
    color: #fff;
    text-align: center;
    font-family: Outfit;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0;
  }
`;
const SubHeader = styled.h3`
  color: white;
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 3% 4%;
`;
