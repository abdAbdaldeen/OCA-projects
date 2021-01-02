import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Card from "./Card";
import "./CardStyle.css";
import ServicesData from "../../data/ServicesData";
import MarvelLogo from "../../img/MarvelLogo.png";
class Cards extends Component {
  render() {
    return (
      <section className="container-fluid d-flex justify-content-center cards servicesCards">
        <div className="row">
          {ServicesData.map((service) => {
            return (
              <div className="col-lg-4 col-md-4">
                <Link to={`service/${service.slug}`}>
                  <Card
                    slug={service.slug}
                    img={service.image}
                    alt={service.alt}
                    header={service.header}
                    text={service.text}
                    isbutton={service.isButton}
                    buttonText={service.buttonText}
                  />
                </Link>
              </div>
            );
          })}
          <div className="MarvelLogo-card">
            <h2>For more examinations</h2>
            <a href="http://martl.hopto.org/">
              <Card
                slug="test"
                img={MarvelLogo}
                alt="MarvelLogo"
                header="MARTL"
                text="Compassion live here ,
              care that lasts a lifetime"
                isbutton={false}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
