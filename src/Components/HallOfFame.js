import React from "react";
import styled from "styled-components";
function HallOfFame() {
  return (
    <HallOfFameStyle>
      <h1>HALL OF FAME</h1>
      <h3>OUR TOP SELLERS</h3>
    </HallOfFameStyle>
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
export default HallOfFame;
