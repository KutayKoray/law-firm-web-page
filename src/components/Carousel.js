import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="/img/avukat.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="/img/court_room.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="/img/deal.jpeg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;