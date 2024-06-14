import React from "react";

const Card = ({ element, index }) => {
  return (
    <>
      
        <div className="col col-md-3 m-5" key={index}>
          <div
            className="card"
            style={{ border: "2px solid black", margin: "20px" }}
          >
            <img src={element.image} alt="" className="card-img-top p-2" />
            <div className="card-body">
              <h4 className="card-title">{element.head}</h4>
              <h5 className="card-subtitle mb-2 text-muted">{element.title}</h5>
              <p className="card-text">
                <strong>Author:</strong> {element.author}
              </p>
              <p className="card-text">
                <strong>Date:</strong> {element.date}
              </p>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Card;
