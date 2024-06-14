import React from "react";
import Card from "../Components/Card";

let Cyber = ({ data }) => {
  let cyberdata = data.filter((ele) => ele.head === "Cyber");
  return (
    <>
      <div className="container">
        <div className="row gap-1">
          {cyberdata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cyber;
