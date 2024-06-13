import React from 'react'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ButtonExplore() {
  return (
    <Link to="explore">
      <ExploreButton>
        <span>
          EXPLORE{'   '}
          <span>{<BsFillRocketTakeoffFill />}</span>
        </span>
      </ExploreButton>
    </Link>
  )
}

export default ButtonExplore

const ExploreButton = styled.button`
  width: 10rem;
  color: black;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 0 5px #fff;
  padding: 1.2rem;
  cursor: pointer;
  margin-left: 8rem;
  font-family: 'Outfit';
  font-weight: bolder;
  border: none;
  font-size: 1rem;

  span {
    color: black;
    scale: 2rem;
  }
`
