import React from 'react'

import Navbar from './Components/Navbar'
import Home from './Components/HomePage/Home'
import WeAssure from './Components/HomePage/WeAssure'
import PopularNFT from './Components/HomePage/PopularNFT'
import HallOfFame from './Components/HomePage/HallOfFame'
import PopularCollection from './Components/HomePage/PopularCollection'
import ExploreMore from './Components/HomePage/ExploreMore'
import Footer from './Components/Footer'
import { NftsProvider } from './store/nfts/main'

function HomePage() {
  return (
    <div>
      <NftsProvider>
        <Navbar />
        <Home />
        <WeAssure />
        <PopularNFT />
        <HallOfFame />
        <PopularCollection />
        <ExploreMore />
        <Footer />
      </NftsProvider>
    </div>
  )
}

export default HomePage
