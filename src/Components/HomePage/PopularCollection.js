import { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { PopularCollectionLeft } from "../Database";
import AutorCollectionLeft from "../../img/creators/model3.jpg";

import { PopularCollectionRight } from "../Database";
import AutorCollectionRight from "../../img/creators/model4.jpg";

function PopularCollection() {
  const [LikedMonsters, setLikedMonsters] = useState(false);
  const [LikedAnimal, setLikedAnimals] = useState(false);
  const [NumberOfLikeAnimals, setNumberOfLikeAnimals] = useState(99);
  const [NumberOfLikeMonsters, setNumberOfLikeMonsters] = useState(124);

  function ToggleLickedAnimals() {
    if (LikedAnimal) {
      setLikedAnimals(false);
      setNumberOfLikeAnimals((prevState) => prevState - 1);
    } else {
      setLikedAnimals(true);
      setNumberOfLikeAnimals((prevState) => prevState + 1);
    }
  }

  function ToggleLickedMonsters() {
    if (LikedMonsters) {
      setLikedMonsters(false);
      setNumberOfLikeMonsters((prevState) => prevState - 1);
    } else {
      setLikedMonsters(true);
      setNumberOfLikeMonsters((prevState) => prevState + 1);
    }
  }

  return (
    <PopularCollectionStyle>
      <h1>POPULAR COLLECTION</h1>
      <h2>RECOMENDED BY USERS FOR USERS</h2>
      <PopularCollectionContainter>
        <Collection>
          {PopularCollectionLeft.map((Picture, key) => (
            <img src={Picture.img} alt={key} key={key}></img>
          ))}
          <OwnerInfo>
            <img src={AutorCollectionLeft} alt="Autor"></img>
            <DetailInfo>
              <h4>ANIMAL PACK</h4>
              <h3>#PixelNinja</h3>
            </DetailInfo>
            <button onClick={() => ToggleLickedAnimals()}>
              {NumberOfLikeAnimals}
              {LikedAnimal ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </OwnerInfo>
        </Collection>
        <Collection>
          {PopularCollectionRight.map((Picture, key) => (
            <img src={Picture.img} alt={key} key={key}></img>
          ))}
          <OwnerInfo>
            <img src={AutorCollectionRight} alt="Autor"></img>
            <DetailInfo>
              <h4>MONSTER PACK</h4>
              <h3>#CodeFox</h3>
            </DetailInfo>
            <button onClick={() => ToggleLickedMonsters()}>
              {NumberOfLikeMonsters}
              {LikedMonsters ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </OwnerInfo>
        </Collection>
      </PopularCollectionContainter>
    </PopularCollectionStyle>
  );
}

export default PopularCollection;

const PopularCollectionStyle = styled.div`
  background-color: #0d0d15;
  color: white;
  width: 100%;
  height: auto;
  margin-top: 3rem;

  h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    text-align: center;
    font-weight: 400;
    margin: 15px 0px;
  }
`;

const PopularCollectionContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collection = styled.div`
  width: 30%;
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: contain;
    margin: 10px;
    @media (max-width: 1280px) {
      width: 150px;
      height: 150px;
    }
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  height: auto;

  margin: 25px 0px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 2rem;
    object-fit: cover;
  }
  button {
    background-color: transparent;
    border: none;
    border-radius: 20px;
    width: 7rem;
    height: 3rem;
    color: white;
    font-family: "Outfit";
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    svg {
      transform: scale(1.5);
    }
  }
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const DetailInfo = styled.div`
  text-align: left;
  h3 {
    margin: 0;
    color: white;
    font-weight: 400;
  }
  h4 {
    margin: 0px 0px 10px 0px;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 2rem;
  }
`;
