import React from 'react';
import ComingEvent from './ComingEvent';
import JoinCard from './JoinCard';
import InfoCard from './InfoCard';
import VlogCard from './VlogCard';
import Ads from './Ads';

const Home = () => {
  return (
    <>
      <div
        className="w3-container w3-content"
        style={{ maxWidth: '1400px', marginTop: '80px' }}
      >
        <div className="w3-row">
          <div className="w3-col m3">
            <InfoCard />
          </div>
          <div className="w3-col m7">
            <VlogCard />
          </div>
          <div className="w3-col m2">
            <ComingEvent />
            <JoinCard />
            <Ads />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Home;
