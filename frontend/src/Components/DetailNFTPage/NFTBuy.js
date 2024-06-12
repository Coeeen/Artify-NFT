import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import SimilarNFT from './SimilarNFT'
import { useMyContext } from '../../store/nfts/main'
import styled from 'styled-components'

function NFTBuy() {
  const { data, dataNft, fetchNft, fetchRandomNfts } = useMyContext()
  let { id } = useParams()
  console.log(id, dataNft)

  useEffect(() => {
    if (id) {
      fetchNft(id)
      fetchRandomNfts()
    }
  }, [id])

  // End day
  const [Like, setLike] = useState(false)

  const Hours = new Date().getHours()
  const Minutes = 60 - new Date().getMinutes()
  const Seconds = 60 - new Date().getSeconds()

  const clickLike = () => {
    if (!Like) {
      setLike(true)
    } else {
      setLike(false)
    }
  }

  return (
    <div>
      {dataNft && (
        <Container>
          <NFTContainer>
            <NFTStyle>
              <img src={dataNft.img} alt={dataNft.name} />
              <h2>{dataNft.name}</h2>
              <OwnerInfo>
                <img src={dataNft.ownerImg} alt={dataNft.ownerName} />
                <NFTInfoText>
                  <DetailInfo>
                    <h4>Owner</h4>
                    <h3>{dataNft.owner}</h3>
                  </DetailInfo>
                  <DetailInfo>
                    <h4>Views</h4>
                    <h3>{dataNft.views}</h3>
                  </DetailInfo>
                </NFTInfoText>
              </OwnerInfo>
              <Line>&zwnj; </Line>
              <BottomCard>
                <h1>{dataNft.price}</h1>
                <button onClick={clickLike}>
                  {dataNft.numberLikes}
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
              <p>{dataNft.description}</p>
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
      )}

      {dataNft && data && <SimilarNFT similarNftCollection={data} />}
    </div>
  )
}

export default NFTBuy

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    margin-bottom: 5rem;
    height: auto;
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

const NFTContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const NFTInfoText = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

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
    font-family: 'Outfit';
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
`

const OwnerInfo = styled.div`
  display: flex;
  height: 4rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 2rem;
  }
`

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
`

const Line = styled.div`
  width: 100%;
  background-color: #181839;
  height: 5px;
  margin: 10px 0px;
`

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
`

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
`

const MakeOffer = styled.button`
  width: 15rem;
  color: #fff;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  cursor: pointer;
  font-family: 'Outfit';
  font-weight: bolder;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid white;
`

const BuyNow = styled.button`
  cursor: pointer;
  width: 15rem;
  padding: 1.5rem;
  border-radius: 26px;
  background: #fff;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.25);
  font-family: 'Outfit';
  font-weight: bolder;
  font-size: 1.5rem;
  font-weight: 400;
  border: 1px solid white;
`

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
`
