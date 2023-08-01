import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage";
import LoginMainPage from "./LoginMainPage";
import RegisterMainPage from "./RegisterMainPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginMainPage />}></Route>
          <Route path="/register" element={<RegisterMainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
