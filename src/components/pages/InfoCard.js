import moment from 'moment';
import React, { useEffect, useContext } from 'react';
import BoatContext from '../../services/context';
import avatar from '../../imgs/user1.jpeg';

export const InfoCard = () => {
  const boatContext = useContext(BoatContext);
  const { getUserProfile, userProfile } = boatContext;

  useEffect(() => {
    getUserProfile();
    //eslint-disable-next-line
  }, []);

  const { name, dob, place, specialists = [], designation } = userProfile;

  return (
    <>
      <div className="w3-card w3-round w3-white mb-4">
        <div className="w3-container">
          <p className="w3-center">
            <img
              src={avatar}
              className="w3-circle"
              style={{ height: '180px', width: '180px' }}
              alt="Avatar"
            />
          </p>
          <h4 className="w3-center">{name}</h4>
          <hr />
          <p>
            <i className="fa fa-user fa-fw w3-margin-right w3-text-theme"></i>{' '}
            {designation}
          </p>
          <p>
            <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{' '}
            {place}
          </p>
          <p>
            <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{' '}
            {moment(dob).format('DD MMM, YYYY')}
          </p>
        </div>
      </div>
      <div className="w3-card w3-round mb-4">
        <div className="w3-white">
          <button
            onclick="myFunction('Demo1')"
            className="w3-button w3-block w3-theme-l1 w3-left-align"
          >
            <i className="fa fa-users fa-fw w3-margin-right"></i> My Groups
          </button>
          <button
            onclick="myFunction('Demo2')"
            className="w3-button w3-block w3-theme-l1 w3-left-align"
          >
            <i className="fa fa-calendar fa-fw w3-margin-right"></i> My Events
          </button>
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-images fa-fw w3-margin-right"></i> My Photos
          </button>
        </div>
      </div>
      <div className="w3-card w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p className="pl-1 pr-3 pb-3 pt-3 border-bottom">Specialists</p>
          <p>
            {specialists.map((spec) => (
              <span className="w3-tag w3-small w3-theme-d5 mr-1">{spec}</span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
export default InfoCard;
