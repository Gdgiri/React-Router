import React from "react";
import Card from "../Components/Card";

const Course = ({ data }) => {
  let course = data.filter((ele) => ele.head === "Course");
  return (
    <>
      <div className="container">
        <div className="row gap-1">
          {course.map((element, index) => {
            return <Card element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
