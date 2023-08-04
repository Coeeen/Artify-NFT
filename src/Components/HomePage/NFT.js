import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function NFT({ id, img, name, ownerName, ownerPicture, price, numberLicked }) {
  const [Liked, setLiked] = useState(false);
  const [NumberOfLike, setNumberOfLike] = useState(numberLicked);
  function ToggleLicked() {
    if (Liked) {
      setLiked(false);
      setNumberOfLike((prevState) => prevState - 1);
    } else {
      setLiked(true);
      setNumberOfLike((prevState) => prevState + 1);
    }
  }

  return (
    <NFTStyle>
      <img src={img} alt={name}></img>
      <h2>{name}</h2>
      <OwnerInfo>
        <img src={ownerPicture} alt={ownerName}></img>
        <DetailInfo>
          <h4>Owner</h4>
          <h3>{ownerName}</h3>
        </DetailInfo>
        <Link to={`/explore/${id}`}>
          <button>BUY IT</button>
        </Link>
      </OwnerInfo>
      <Line>&zwnj; </Line>
      <BottomCard>
        <h1>{price}</h1>
        <button onClick={() => ToggleLicked()}>
          {NumberOfLike}
          {Liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </BottomCard>
    </NFTStyle>
  );
}

const NFTStyle = styled.div`
  height: 30rem;
  border-radius: 28px;
  background: #0e0e17;
  width: 20rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  img {
    border-radius: 20px;
    object-fit: cover;
    width: 320px;
    height: 300px;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  height: 4rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 2rem;
  }
  button {
    background-color: #553396;
    color: white;
    cursor: pointer;
    width: 5rem;
    font-family: "Outfit";
    font-weight: 400;
    border-radius: 20px;
    border: none;
    height: 2.5rem;
    margin: 0.5rem 0rem 0rem 1.5rem;
  }
`;

const DetailInfo = styled.div`
  text-align: left;
  h3 {
    margin: 0;
    color: white;
    font-weight: 400;
    font-size: 1rem;
  }
  h4 {
    margin: 0px 0px 10px 0px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
`;

const Line = styled.div`
  width: 100%;
  background-color: #181839;
  height: 5px;
  margin: 10px 0px;
`;

const BottomCard = styled.div`
  margin: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: white;
  }
  button {
    background-color: #181839;
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
    margin: 10px;
    svg {
      transform: scale(1.5);
    }
  }
`;
export default NFT;
