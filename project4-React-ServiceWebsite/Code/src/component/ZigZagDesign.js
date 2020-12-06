import React from 'react';
import '../styles/ZigZagStyle.css';
import forYou from '../img/forYou.jpg';
import PCRLogo from '../img/landingPageImage.png';
import bookNow from '../img/bookNow.jpg';

const ZigZagDesign = () => {
  return (
    <section>
      <div className='zigzag-container'>
        <div className='zigzag-row-container'>
          <div className='zigzag-column-66'>
            <h2>We’re here for you</h2>
            <p>
              Helping you take control of your health and to protect yourself
              and others.
            </p>
          </div>
          <div className='zigzag-column-33'>
            <img
              alt='>We’re here for you during covid-19 png'
              className='zigzag-image-style'
              src={forYou}
            ></img>
          </div>
        </div>
      </div>

      <div className='zigzag-container white'>
        <div className='zigzag-row-container'>
          <div style={{ background: '#BFCBD2' }} className='zigzag-column-33'>
            <img
              alt='PRC logo'
              className='zigzag-image-style'
              src={PCRLogo}
            ></img>
          </div>
          <div className='zigzag-column-66'>
            <h2>PCR</h2>
            <p>
              It's a booking service for making Covid-19 test reservations
              ethier in local hospitals or drive through tests or at home.
            </p>
          </div>
        </div>
      </div>

      <div className='zigzag-container'>
        <div className='zigzag-row-container'>
          <div className='zigzag-column-66'>
            <h2>Book anytime 24/7</h2>
            <p>
              Now you can make a reservation of any, and select the number of
              people who would like to make the test this will help social
              destining by scheduling the times and preparing the testing areas
              just for you!
            </p>
          </div>
          <div className='zigzag-column-33'>
            <img
              alt='Book anytime 24/7 service in PCR png'
              className='zigzag-image-style'
              src={bookNow}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZigZagDesign;
