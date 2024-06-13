import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import React from 'react'

function ButtonJoin() {
  return (
    <div>
      {' '}
      <Link to="register">
        <JoinUsButton>
          <span>{<AiFillHome />} </span> JOIN US
        </JoinUsButton>
      </Link>
    </div>
  )
}

export default ButtonJoin

const JoinUsButton = styled.button`
  width: 150px;
  color: white;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: 0 0 5px #c486ca;
  font-family: 'Outfit';
  font-weight: bold;
  font-size: 1rem;
  padding: 1.1rem;
  cursor: pointer;
  margin-bottom: 15px;
  border: none;
  span {
    color: white;
    scale: 2rem;
  }
  @media (max-width: 1280px) {
    width: 5 rem;
    padding: 1rem;
  }
`
