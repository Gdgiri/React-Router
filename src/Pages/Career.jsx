import React from "react";
import Card from "../Components/Card";

let Career = ({ data }) => {
  let fsddata = data.filter((ele) => ele.head === "Career");
  return (
    <>
      <div className="container">
        <div className="row gap-2">
          {fsddata.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Career;
