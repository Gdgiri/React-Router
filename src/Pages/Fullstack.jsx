import React from "react";
import Card from "../Components/Card";

let Fullstack = ({ data }) => {
  let fsddata = data.filter((ele) => ele.head === "Full Stack Development");
  return (
    <>
      <div className="container">
        <div className="row gap-1">
          {fsddata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Fullstack;
