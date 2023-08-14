import styled from "styled-components";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AllNFT } from "../Database";
import SimilarNFT from "./SimilarNFT";

function NFTBuy() {
  //Search for ID
  const params = useParams();
  const id = parseInt(params.id);
  const nft = AllNFT.find((item) => item.id === id);

  //show next Nft by id
  const currentIndex = AllNFT.findIndex((item) => item.id === id);

  const nftNext = currentIndex !== -1 && AllNFT[currentIndex + 1];
  const nftPrev = currentIndex !== -1 && AllNFT[currentIndex - 1];
  const nftTwoNext = currentIndex !== -1 && AllNFT[currentIndex + 2];

  const similarNftCollection = [
    {
      ...nftTwoNext,
    },
    {
      ...nftNext,
    },
    {
      ...nftPrev,
    },
  ];

  //End day

  const [Like, setLike] = useState(false);

  const Hours = new Date().getHours();
  const Minutes = 60 - new Date().getMinutes();
  const Seconds = 60 - new Date().getSeconds();

  return (
    <>
      <Container>
        <NFTContainer>
          <NFTStyle>
            <img src={nft.img} alt={nft.name}></img>
            <h2>{nft.name}</h2>
            <OwnerInfo>
              <img src={nft.ownerPicture} alt={nft.ownerName}></img>
              <DetailInfo>
                <h4>Owner</h4>
                <h3>{nft.ownerName}</h3>
              </DetailInfo>
            </OwnerInfo>
            <Line>&zwnj; </Line>
            <BottomCard>
              <h1>{nft.price}</h1>
              <button onClick={() => setLike(!Like)}>
                {Like ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </BottomCard>
          </NFTStyle>
        </NFTContainer>
        <TextContainer>
          <Timer>
            <h1>AUCTIONS ENDS IN </h1>
            <h2>{`${Hours} hours and ${Minutes} Minutes ${Seconds}`}</h2>
          </Timer>
          <Timer>
            <p>
              Step into the mesmerizing world of NFTs, where digital art meets
              blockchain technology, offering a new paradigm of ownership and
              creativity for collectors and creators alike
            </p>
          </Timer>
          <ButtonContainer>
            <Link to="/login">
              <BuyNow>BUY NOW!</BuyNow>
            </Link>
            <Link to="/login">
              <MakeOffer>MAKE OFFER!</MakeOffer>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </Container>
      <SimilarNFT similarNftCollection={similarNftCollection} />
    </>
  );
}

export default NFTBuy;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const NFTContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const NFTStyle = styled.div`
  height: 40rem;
  border-radius: 28px;
  background: #0e0e17;
  box-shadow: 0px 0px 10px #0e0e17;
  width: 25rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
    text-align: center;
  }

  img {
    border-radius: 20px;
    object-fit: cover;
    width: 99%;
    height: 400px;
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

const OwnerInfo = styled.div`
  display: flex;
  height: 4rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 2rem;
  }
`;

const DetailInfo = styled.div`
  text-align: left;
  h3 {
    margin: 0;
    color: white;
    font-weight: 400;
    font-size: 1.5rem;
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
    margin-left: 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin-top: 3rem;
  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
    flex-direction: column;
    gap: 2rem;
  }
`;

const MakeOffer = styled.button`
  width: 15rem;
  color: #fff;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  cursor: pointer;
  font-family: "Outfit";
  font-weight: bolder;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid white;
`;

const BuyNow = styled.button`
  cursor: pointer;
  width: 15rem;
  padding: 1.5rem;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.25);
  font-family: "Outfit";
  font-weight: bolder;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid white;
`;

const Timer = styled.div`
  background-color: #0e0e17;
  border-radius: 28px;
  width: 80%;
  text-align: center;
  margin-top: 3rem;
  max-width: 550px;

  h2 {
    font-weight: 400;
  }
  p {
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;
