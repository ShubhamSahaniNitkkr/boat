import React from 'react';
import eventImage from '../../imgs/event.jpeg';

export const ComingEvent = () => {
  return (
    <div className="w3-card w3-round w3-white w3-center p-2 mb-4">
      <div className="w3-container">
        <p className="pt-1">Upcoming Event:</p>
        <img src={eventImage} alt="Forest" style={{ width: '100%' }} />
        <p className="pt-3 pb-0">
          <strong>Top 10 Exercise at Home</strong>
        </p>
        <p>Friday 15:00</p>
        <p>
          <button className="btn btn-info w-100">Book Ticket</button>
        </p>
      </div>
    </div>
  );
};
export default ComingEvent;
