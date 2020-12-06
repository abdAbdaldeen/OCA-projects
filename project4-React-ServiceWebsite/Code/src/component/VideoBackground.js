import React from 'react';
import { Link } from 'react-scroll';
import '../styles/VideoStyle.css';
import BackgroundVideo from './video/covid.mp4';

const VideoBackground = () => {
  return (
    <section className='landing-page-container'>
      <div className='video-op-show'>
        <video
          alt='covid-19 realted video'
          autoPlay
          loop
          muted
          className='landing-page-video-bg'
        >
          <source src={BackgroundVideo} type='video/mp4' />
        </video>
      </div>
      <div className='landing-page-centered-video-text-con'>
        <h1 style={{ color: 'white', fontWeight: '900', fontSize: '9rem' }}>
          PCR
        </h1>
        <Link
          activeClass='active'
          className='test1'
          to='test1'
          spy={true}
          smooth={true}
          duration={500}
        >
          <i class='fas fa-arrow-circle-down navigate-down-landing-page'></i>
        </Link>
      </div>
    </section>
  );
};

export default VideoBackground;

//npm install react-scroll
