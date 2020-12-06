import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Cards/Card";
import ServiceData from "../../data/ServicesData";
import DriveThroughData from "../../data/DriveThroughServiceData";
import AtSiteService from "../../data/AtSiteServicesData";
import AtHomeService from "../../data/AtHomeServicesData";
import "../../component/Cards/CardStyle.css";
import Tabs from "./Tabs";
import "./servicePage.css";

const ServicePage = ({ match }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  // const labelStyle = { background: 'red', padding: '0.3rem' };

  const service = ServiceData.find(
    (service) => service.slug === match.params.slug
  );
  let Cards;
  let currentObj;
  const getData = (data) => {
    currentObj = data;
    setSelectedCardData(currentObj);
    return currentObj;
  };

  if (match.params.slug === "hospital") {
    Cards = AtSiteService.map((service, index) => {
      return (
        <div className="col-lg-4 col-md-4">
          <input
            style={{ appearance: "none" }}
            name="hospital"
            type="radio"
            id={index}
          />
          <label
            style={
              index === selectedCardIndex
                ? {
                    background: "#3f72af",
                    padding: "0.3rem",
                    borderRadius: "0.3rem",
                  }
                : { background: "white" }
            }
            onClick={() => {
              setSelectedCard(index);
              setSelectedCardData(AtSiteService[index]);
              setSelectedCardIndex(index);
            }}
            htmlFor={index}
          >
            <Card
              img={service.image}
              alt={service.alt}
              price={service.price}
              header={service.header}
              text={service.location}
              isbutton={service.isButton}
            />
          </label>
        </div>
      );
    });
  } else if (match.params.slug === "driveThrough") {
    Cards = DriveThroughData.map((service, index) => {
      return (
        <div className="col-lg-4 col-md-4">
          <input
            style={{ appearance: "none" }}
            name="driveThrough"
            type="radio"
            id={index}
          />
          <label
            style={
              index === selectedCardIndex
                ? {
                    background: "#3f72af",
                    padding: "0.3rem",
                    borderRadius: "0.3rem",
                  }
                : { background: "white" }
            }
            onClick={() => {
              setSelectedCard(index);
              getData(DriveThroughData[index]);
              setSelectedCardIndex(index);
            }}
            htmlFor={index}
          >
            <Card
              img={service.image}
              alt={service.alt}
              header={service.header}
              price={service.price}
              text={service.location}
              isbutton={service.isButton}
            />
          </label>
        </div>
      );
    });
  } else {
    Cards = AtHomeService.map((service, index) => {
      return (
        <div className="col-lg-4 col-md-4">
          <input
            style={{ appearance: "none" }}
            name="atHomeService"
            type="radio"
            id={index}
          />
          <label
            style={
              index === selectedCardIndex
                ? {
                    background: "#3f72af",
                    padding: "0.3rem",
                    borderRadius: "0.3rem",
                  }
                : { background: "white" }
            }
            onClick={() => {
              setSelectedCard(index);
              getData(AtHomeService[index]);
              setSelectedCardIndex(index);
            }}
            htmlFor={index}
          >
            <Card
              img={service.image}
              alt={service.alt}
              header={service.header}
              price={service.price}
              text={service.location}
              isbutton={service.isButton}
            />
          </label>
        </div>
      );
    });
  }
  document.title = "PCR | Service Page";
  document.getElementsByTagName(
    "META"
  )[4].content = `our service ${match.params.slug} to provide our services 24/7`;
  return (
    <>
      <Link to="/services" className="btn btn-dark my-3">
        Go Back
      </Link>
      <div className="container-fluid d-flex justify-content-center cards">
        <div className="row">{Cards}</div>
      </div>
      <Tabs selectedBooking={selectedCardData} />
    </>
  );
};

export default ServicePage;

//npm install --save react-modal
