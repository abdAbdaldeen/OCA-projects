import React, { Component } from 'react';
import VideoBackground from '../component/VideoBackground';
import ZigZag from '../component/ZigZagDesign';
import YoutubeAPI from '../component/YoutubeAPI';
import CarouselTastamonials from '../component/CarouselLandingPage';
import DevelopersCards from '../component/Cards/LandingPageCards';
import Covid from '../component/CoronaInjuries/corona';
import { Element } from 'react-scroll';

export class LandingPage extends Component {
  render() {
    document.title = 'PCR | Landing Page';
    document.getElementsByTagName('META')[4].content =
      'web site for booking covid-19 tests online, for yourself or family members without having to wait, and to avoid the traffic in hospitals.';
    return (
      <section>
        <VideoBackground />
        <Element name='test1' className='element'>
          <Covid />
          <ZigZag />
        </Element>
        <YoutubeAPI />
        <CarouselTastamonials />
        <DevelopersCards />
      </section>
    );
  }
}

export default LandingPage;
