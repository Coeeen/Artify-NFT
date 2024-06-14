import React from 'react'
import styled from 'styled-components'
import model from '../../img/creators/model4.jpg'
function MainUserPage() {
  return (
    <MainUserContainer>
    <ProfileData>
      <ProfileContainer>
        <img src={model} alt="profile" />
        <h1>Stinger_22</h1>
      </ProfileContainer>
      </ProfileData>
    </MainUserContainer>
  )
}

export default MainUserPage

const MainUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: red;  

`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size:20px;
  }
  img {
    border-radius: 10%;
    width:100px;
  }
`
const ProfileData = styled.div`

`