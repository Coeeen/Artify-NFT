import "./App.css";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

import MainPage from "./MainPage";
import LoginMainPage from "./LoginMainPage";
import RegisterMainPage from "./RegisterMainPage";
import ContactUsPage from "./ContactUsPage";
import ExploreMorePage from "./ExploreMorePage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/explore" element={<ExploreMorePage />} />
          <Route path="/login" element={<LoginMainPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/register" element={<RegisterMainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
