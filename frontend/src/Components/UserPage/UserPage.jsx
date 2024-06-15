import React from 'react'
import styled from 'styled-components'
import model from '../../img/creators/model4.jpg'
import NoDataImage from "../../img/Svg/NoDataFound.json"
import Lottie from 'lottie-react'
import '../../style.scss';

function MainUserPage() {
  return (
    <MainUserContainer>
    <div>
      <ProfileContainer>
        <img src={model} alt="profile" />
        <span style={{fontWeight:'600'}}>Stinger_22</span>
        <span style={{color:"grey"}}>New user</span>
        <div className='data info'>
        <div className='separator'/>
        <span className='text-profile'>Number of NFTs you have in your account [<span style={{color:'red'}}>0</span>]</span>
        <div className='separator'/>
        <span className='text-profile'>Number of NFTs you liked in your account [<span style={{color:'red'}}>0</span>]</span>
        <div className='separator'/>
        <span className='text-profile'>Number of NFTs you saved in your account [<span style={{color:'red'}}>0</span>]</span>
        </div>
      </ProfileContainer>
      </div>

      <ProfileSavedDataContainer>
      <Lottie animationData={NoDataImage} />;
      <h1 className='noData'>No data found...</h1>
      </ProfileSavedDataContainer>
    </MainUserContainer>
  )
}

export default MainUserPage

const MainUserContainer = styled.div`
  display: flex;
  height:64vh;

`

const ProfileContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  border-radius:10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  padding:15px;
  margin-left:50px;
  width:400px;
  height:450px;
  background-color: #0e0e17;
  span {
    color: white;
    font-size:17px;
  }
  img {
    border-radius: 30%;
    width:100px;
    margin-bottom:10px
  }
`
const ProfileSavedDataContainer = styled.div`
 display: flex;  
  flex-direction: column;
  align-items: center;
  border-radius:10px;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  padding:15px;
  margin: 0px 50px;
  flex:1;
  height:450px;
  background-color: #0e0e17;
  span {
    color: white;
    font-size:17px;
  }
  img {
    border-radius: 30%;
    width:100px;
    margin-bottom:10px
  }
`

