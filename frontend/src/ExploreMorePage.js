import React from 'react'
import Navbar from './Components/Navbar'
import ExploreHome from './Components/ExplorePage/ExploreHome'
import ExploreCollection from './Components/ExplorePage/ExploreCollection'
import SearchBy from './Components/ExplorePage/SearchBy'
import Footer from './Components/Footer'

import { NftsProvider } from './store/nfts/main'

function ExploreMorePage() {
  return (
    <div>
      <NftsProvider>
        <Navbar />
        <ExploreHome />
        <ExploreCollection />
        <SearchBy />
        <Footer />
      </NftsProvider>
    </div>
  )
}

export default ExploreMorePage
