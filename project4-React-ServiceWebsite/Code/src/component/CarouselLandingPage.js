import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CarousellStyle.css';

const ImageCarousel = () => {
  return (
    <>
      <section className='image-carousel-container'>
        <Carousel
          swipeable={true}
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img
              alt='Ahmad ALhuwwari profile picture'
              src='https://media-exp1.licdn.com/dms/image/C5603AQGeeCE6ie9Uqw/profile-displayphoto-shrink_800_800/0?e=1612396800&v=beta&t=CHMhjEYTew4dkvMwM1yxt69ftMTn0dK6eLVYEli6CJE'
            />
            <div className='myCarousel'>
              <h3>Ahmad ALhuwwari</h3>
              <h4>UI / UX Designer</h4>
              <p>
                PCR was the perfect choice for me, the great staff made sure the
                tests went smoothly.
              </p>
            </div>
          </div>

          <div>
            <img
              alt='Rami Abu Al-Samen profile picture'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQGKmOP0CGUiAQ/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=vXisx5AVegpdFMwfX7WSJBwPfCa-IdJ7kbLD9_JFwPU'
            />
            <div className='myCarousel'>
              <h3>Rami Abu Al-Samen</h3>
              <h4>GM of Orange Coding Academy</h4>
              <p>
                PCR is an excellent choice for anybody who wants to make
                covid-19 test. I recommend it to anybody
                enquiring.
              </p>
            </div>
          </div>

          <div>
            <img
              alt='Khadeejah Hamdan profile picture'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQGe4_04wqmMoQ/profile-displayphoto-shrink_400_400/0/1586190073338?e=1612396800&v=beta&t=mU-qyGbKK24NkS4pW7ESrNfX3c3DrEeiBJEvpzMwUDU'
            />
            <div className='myCarousel'>
              <h3>Khadeejah Hamdan</h3>
              <h4>Expert Lead Trainer At Orange Coding Academy</h4>
              <p>
                It was a pleasure to book from PCR. I recommend it to anybody
                enquiring. I tried it with all the Coding Academy teams and we were happy about it 

              </p>
            </div>
          </div>

          <div>
            <img
              alt='Mohammad Shwaiki profile picture'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQElvsefOJmWAA/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=SBlDXC5_ivscY7Z8sSGn7IG1jgCoWaEWRJMRMEKTRzw'
            />
            <div className='myCarousel'>
              <h3>Mohammad Shwaiki</h3>
              <h4>Lead Trainer Team Leader At Orange Coding Academy</h4>
              <p>
                Brilliant service and the staff are super friendly and
                professional. It was refreshing being welcomed with a smile.
              </p>
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default ImageCarousel;
