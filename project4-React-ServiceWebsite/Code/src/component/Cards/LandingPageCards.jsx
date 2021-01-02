import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileUI from "react-profile-card";
import "./CardStyle.css";
import abed from "../../img/1-3.png";
import diaa from "../../img/diaa.png";
import sarah from "../../img/sarah1.png";
class DevelopersCards extends Component {
  render() {
    return (
      <Container fluid className="developersCards">
        <h4 style={{ textAlign: "center", padding: "2rem" }}>
          Our Development Team
        </h4>
        <Row>
          <Col>
            <div className="developers-cards">
              <ProfileUI
                imgUrl={abed}
                name="Abdel rahman Abdaldeen"
                designation="computer scieince"
              />
            </div>
          </Col>
          <Col>
            <div className="developers-cards">
              <ProfileUI
                imgUrl={diaa}
                name="Diaa Jamel"
                designation="Electrical Engineer"
              />
            </div>
          </Col>

          <Col>
            <div className="developers-cards">
              <ProfileUI
                imgUrl={sarah}
                name="Sarah Al-Eswed"
                designation="mangment information system"
              />
            </div>
          </Col>

          <Col>
            <div className="developers-cards">
              <ProfileUI
                imgUrl="https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4"
                name="Ashraf Al-Jabari"
                designation="computer scieince"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DevelopersCards;
