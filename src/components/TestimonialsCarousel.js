import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsCarousel.css';

const TestimonialsCarousel = () => {
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
    <div className="testimonials-carousel">
      <h2>Müşteri Yorumları</h2>
      <Slider {...settings}>
        <div className="testimonial-item">
          <img src="/img/profile1.jpeg" alt="Ahmet Y." className="profile-image" />
          <p>"Harika bir hizmet deneyimi yaşadık. Kesinlikle tavsiye ederim!"</p>
          <p>- Ahmet Y.</p>
        </div>
        <div className="testimonial-item">
          <img src="/img/profile2.jpeg" alt="Ayşe K." className="profile-image" />
          <p>"İşletme ekibi çok profesyonel ve ilgili. Teşekkürler!"</p>
          <p>- Ayşe K.</p>
        </div>
        <div className="testimonial-item">
          <img src="/img/profile3.jpeg" alt="Mehmet T." className="profile-image" />
          <p>"Hizmet kalitesi ve müşteri memnuniyeti mükemmel."</p>
          <p>- Mehmet T.</p>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;