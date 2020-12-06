import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileUI from 'react-profile-card';
import './CardStyle.css';
import abed from '../../img/abed.jpg';
class DevelopersCards extends Component {
  render() {
    return (
      <Container fluid className='developersCards'>
        <h4 style={{ textAlign: 'center', padding: '2rem' }}>
          Our Development Team
        </h4>
        <Row>
          <Col>
            <div className='developers-cards'>
              <ProfileUI
                imgUrl={abed}
                name='Abdel rahman Abdaldeen'
                designation='computer scieince'
              />
            </div>
          </Col>
          <Col>
            <div className='developers-cards'>
              <ProfileUI
                imgUrl='https://avatars0.githubusercontent.com/u/71770261?s=460&u=0a269e020a0af1045c8ce24ab773a2c886eaf871&v=4'
                name='Diaa Jamel'
                designation='Electrical Engineer'
              />
            </div>
          </Col>

          <Col>
            <div className='developers-cards'>
              <ProfileUI
                imgUrl='https://avatars3.githubusercontent.com/u/71769554?s=460&u=9fbfb665d6ef6b1f1af308d43efe467b9e45412b&v=4'
                name='Sarah Al-Eswed'
                designation='mangment information system'
              />
            </div>
          </Col>

          <Col>
            <div className='developers-cards'>
              <ProfileUI
                imgUrl='https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4'
                name='Ashraf Al-Jabari'
                designation='computer scieince'
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DevelopersCards;
