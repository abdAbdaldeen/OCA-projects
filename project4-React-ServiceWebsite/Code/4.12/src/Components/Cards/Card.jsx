import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="flow">
        <img src={props.img} alt={props.alt} className="card-img-top" />
      </div>

      <div className="card-body text-dark">
        <h3 className="card-title">
          {props.header}
          <p className="card-text text-secondary">{props.text}</p>
          {props.isbutton ? (
            <a href={props.link} className="btn btn-primary">
              {props.buttonText}
            </a>
          ) : (
            ""
          )}
        </h3>
      </div>
    </div>
  );
}

export default Card;
