import React from 'react';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper();

import cleanest from '../../assets/cleanest.png';
import mealMatch from '../../assets/meal-match.png';
import myJober from '../../assets/myJober.png';
import noteTaker from '../../assets/noteTaker.png';

function Portfolio() {
  return (
    <section>
      <h1>My Projects</h1>

      <Swiper
        className={mySwiper}
        navigation={true}
        pagination={true}
        loop={true}
        centeredSlide={true}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
