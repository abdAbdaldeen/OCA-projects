import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './CardStyle.css';
import ServicesData from '../../data/ServicesData';

class Cards extends Component {
  render() {
    return (
      <section className='container-fluid d-flex justify-content-center cards'>
        <div className='row'>
          {ServicesData.map((service) => {
            return (
              <div className='col-lg-4 col-md-4'>
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
        </div>
      </section>
    );
  }
}

export default Cards;
