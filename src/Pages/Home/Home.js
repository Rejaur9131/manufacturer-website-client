import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="px-5">
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
