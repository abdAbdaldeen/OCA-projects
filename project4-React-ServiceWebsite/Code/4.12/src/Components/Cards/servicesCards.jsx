import React, { Component } from "react";
import Card from "./Card";
import hospital from "../../img/hospital1.jpg";
import drive from "../../img/drive1.jpg";
import home from "../../img/home3.jpg";
import "./style.css";
class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center cards">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Card
              img={hospital}
              alt="hospital"
              header="By Hospital"
              text="hello hospital"
              link="https://www.google.com/"
              isbutton={true}
              buttonText="Book Now"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <Card
              img={drive}
              alt="drive"
              header="By drive"
              text="hello drive"
              link="https://www.google.com/"
              isbutton={true}
              buttonText="Book Now"
            />
          </div>
          <div className="col-lg-4 col-md-4">
            <Card
              img={home}
              alt="home"
              header="By home"
              text="hello home"
              link="https://www.google.com/"
              isbutton={true}
              buttonText="Book Now"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
