import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import BlogSection from '../components/BlogSection';
import InfoSection from '../components/InfoSection';
import ServicesSection from '../components/ServicesSection';
import Card from '../components/Card';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ReferencesSection from '../components/ReferencesSection';

const Home = () => {
  const cards = [
    {
      title: 'Hizmet 1',
      description: 'Bu hizmetimiz hakkında bilgi.',
      image: '/img/avukat.jpeg',
    },
    {
      title: 'Hizmet 2',
      description: 'Bu hizmetimiz hakkında bilgi.',
      image: '/img/court_room.jpeg',
    },
    {
      title: 'Hizmet 3',
      description: 'Bu hizmetimiz hakkında bilgi.',
      image: '/img/deal.jpeg',
    },
  ];

  return (
    <div>
      <HeroSection />
      <Carousel />
      <BlogSection />
      <InfoSection />
      <ServicesSection />
      <div className="container my-5">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <Card title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </div>
      <TestimonialsCarousel />
      <ReferencesSection />
    </div>
  );
};

export default Home;