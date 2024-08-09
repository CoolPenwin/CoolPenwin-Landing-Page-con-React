import React from "react";
const Card = (props) => {
  return (
    <div class="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.cardImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.carText}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
