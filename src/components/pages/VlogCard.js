import React, { useEffect, useContext } from 'react';
import BoatContext from '../../services/context';

export const VlogCard = () => {
  const boatContext = useContext(BoatContext);
  const { fetchVlogs, searchVlogs, vlogs } = boatContext;

  useEffect(() => {
    fetchVlogs();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container pt-3 pb-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for the vlogs by their Author name ..."
                  aria-label="Search for the vlogs"
                  aria-describedby="basic-addon2"
                  onChange={(e) => searchVlogs(e.target.value)}
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    className="btn btn-info w3-theme"
                    style={{ zIndex: 0 }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {vlogs.length === 0 && (
        <div className="w3-container w3-card w3-white w3-round w3-margin p-3">
          No matching vlogs exist
        </div>
      )}
      {vlogs.map(({ name, createdAt, content, avatar, images = [] }) => (
        <div className="w3-container w3-card w3-white w3-round w3-margin p-3">
          <img
            src={avatar}
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: '60px' }}
          />
          <span className="w3-right w3-opacity mt-4 mr-1">{createdAt}</span>
          <h4 className="mt-4">{name}</h4>
          <hr className="w3-clear" />
          <p>{content}</p>
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            {images.map((img) => (
              <div className="w3-half">
                <img
                  src={img}
                  style={{ width: '100%' }}
                  alt="Northern Lights"
                  className="w3-margin-bottom"
                />
              </div>
            ))}
          </div>
          <button type="button" className="w3-button w3-theme-d1">
            <i className="fa fa-thumbs-up"></i>  Like
          </button>
          <button type="button" className="w3-button w3-theme-d2">
            <i className="fa fa-comment"></i>  Comment
          </button>
        </div>
      ))}
    </>
  );
};
export default VlogCard;
