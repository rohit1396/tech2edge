import React from "react";
import "./Banner.css";

const Banner = ({ seriesData }) => {
  return (
    <header
      className="series"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(0deg, transparent, rgba(37, 37, 37, 0.61), #111 ),url("https://demo.tech2edge.co/samples/${seriesData?.img}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="series_contents">
        <h1 className="series_title">{seriesData.title}</h1>
        <h4 className="series_ott">Where to watch : {seriesData.ott}</h4>
        <p className="series_desc">{seriesData.desc}</p>
        <div className="series_fadeBottom"></div>
      </div>
    </header>
  );
};

export default Banner;
