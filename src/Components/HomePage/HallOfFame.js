import React from "react";
import styled from "styled-components";
import { TopOwners } from "../Database";
function HallOfFame() {
  return (
    <div>
      <HallOfFameStyle>
        <h1>HALL OF FAME</h1>
        <h3>OUR TOP SELLERS</h3>
      </HallOfFameStyle>
      <Contener>
        {TopOwners.map((Owner) => (
          <TopCustomer key={Owner.name}>
            <div>
              <h1>{Owner.name}</h1>
              <h2>{Owner.spend}</h2>
            </div>
            <img src={Owner.img} alt={Owner.name}></img>
          </TopCustomer>
        ))}
      </Contener>
    </div>
  );
}

const HallOfFameStyle = styled.div`
  color: white;
  text-align: center;
  margin-top: 3rem;
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
`;
const Contener = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
  font-family: "Outfit";
  font-weight: bold;
  letter-spacing: 3px;
  @media (max-width: 1280px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    margin-left: 5rem;
    object-fit: cover;
  }
`;
const TopCustomer = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1280px) {
    margin-bottom: 2rem;
  }
`;

export default HallOfFame;
