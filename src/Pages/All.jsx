import React from "react";
import Card from "../Components/Card";

const All = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row gap-1">
          {data.map((element, index) => {
            return (
             
                <Card element={element} index={index} />
           
            );
          })}
        </div>
      </div>
    </>
  );
};

export default All;
