import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cast from "./components/Cast";
import Navbar from "./components/Navbar";

function App() {
  const [castInfo, setCastInfo] = useState([]);
  const [seriesInfo, setSeriesInfo] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const result = await fetch("https://demo.tech2edge.co/samples/data-sg");
      const actualData = await result.json();
      setCastInfo(actualData.characters);
      setSeriesInfo(actualData.series);
    };
    getInfo();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner seriesData={seriesInfo} />
      <Cast castData={castInfo} />
    </div>
  );
}

export default App;
