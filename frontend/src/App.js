import './App.css'
import { useEffect } from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'

import MainPage from './MainPage'
import LoginMainPage from './LoginMainPage'
import RegisterMainPage from './RegisterMainPage'
import ContactUsPage from './ContactUsPage'
import ExploreMorePage from './ExploreMorePage'
import ForgetPasswordPage from './ForgetPasswordPage'
import DetailNft from './DetailNft'
import { NftsProvider } from './store/nfts/main'
import { UserProvider } from './store/user/mainUser'
import AdminPanelPage from './AdminPanelPage'
import UserMainPage from './UserMainPage'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <NftsProvider>
      <UserProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/explore" element={<ExploreMorePage />} />
            <Route path="/login" element={<LoginMainPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/register" element={<RegisterMainPage />} />
            <Route path="/forgot" element={<ForgetPasswordPage />} />
            <Route path="/explore/:id" element={<DetailNft />} />
            <Route path="/admin" element={<AdminPanelPage />} />
            <Route path="/user/:id" element={<UserMainPage />} />
          </Routes>
        </BrowserRouter>
        </UserProvider>
      </NftsProvider>
    </div>
  )
}

export default App
