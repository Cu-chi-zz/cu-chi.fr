import React from 'react';
import Header from '../components/Header';
import DiscordName from '../components/DiscordName';
import SocialLinks from '../components/SocialLinks';
import Description from '../components/Description';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Description />
      <SocialLinks />
      <DiscordName />
    </div>
  );
};

export default Home;