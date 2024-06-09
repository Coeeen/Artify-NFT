import React from 'react'
import Navbar from './Components/Navbar'
import NFTBuy from './Components/DetailNFTPage/NFTBuy'
import Footer from './Components/Footer'

import { NftsProvider } from './store/nfts/main'

function DetailNft() {
  return (
    <div>
      <NftsProvider>
        <Navbar />
        <NFTBuy />
        <Footer />
      </NftsProvider>
    </div>
  )
}

export default DetailNft
