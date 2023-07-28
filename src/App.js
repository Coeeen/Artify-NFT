import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import WeAssure from "./Components/WeAssure";
import PopularNFT from "./Components/PopularNFT";
import HallOfFame from "./Components/HallOfFame";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WeAssure />
      <PopularNFT />
      <HallOfFame />
    </div>
  );
}

export default App;
