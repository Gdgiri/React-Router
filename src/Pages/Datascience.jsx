import React from "react";
import Card from "../Components/Card";

const Datascience = ({ data }) => {
  let datasci = data.filter((ele) => ele.head === "Data Science");
  return (
    <>
      <div className="container">
        <div className="row gap-1">
          {datasci.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Datascience;
