import React from "react";
import Navbar from "./Components/Navbar";
import ExploreHome from "./Components/ExplorePage/ExploreHome";
import ExploreCollection from "./Components/ExplorePage/ExploreCollection";
import SearchBy from "./Components/ExplorePage/SearchBy";
import Footer from "./Components/Footer";

function ExploreMorePage() {
  return (
    <div>
      <Navbar />
      <ExploreHome />
      <ExploreCollection />
      <SearchBy />
      <Footer />
    </div>
  );
}

export default ExploreMorePage;
