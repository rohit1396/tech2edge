import React from "react";
import "./Cast.css";

const Cast = ({ castData }) => {
  return (
    <div className="cast_page">
      <h1>Cast Details : </h1>
      <div className="cast">
        {castData.map((data) => (
          <div className="cast_info" key={data.id}>
            <h4 className="cast_name">{data.name}</h4>
            <h5 className="cast_profession">{data.profession}</h5>
            <h6 className="cast_age">{data.age}</h6>
            <img
              className="cast_image"
              src={`https://demo.tech2edge.co/samples/${data?.img}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
