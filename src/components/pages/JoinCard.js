import React from 'react';
import avatar from '../../imgs/user1.jpeg';

export const ComingEvent = () => {
  return (
    <div className="w3-card w3-round w3-white w3-center mb-4 pt-3">
      <div className="w3-container">
        <p>Join My Team</p>
        <img src={avatar} alt="Avatar" style={{ width: '50%' }} />
        <br />
        <span>Request Join</span>
        <div className="w3-row w3-opacity">
          <div className="w3-half">
            <button
              className="w3-button w3-block w3-green w3-section"
              title="Accept"
            >
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="w3-half">
            <button
              className="w3-button w3-block w3-red w3-section text-white"
              title="Decline"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingEvent;
