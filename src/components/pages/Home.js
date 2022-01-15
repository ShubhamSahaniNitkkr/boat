import React from 'react';
import ComingEvent from './ComingEvent';
import JoinCard from './JoinCard';
import InfoCard from './InfoCard';
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
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <div className="w3-card w3-round w3-white">
                  <div className="w3-container pt-4 pb-3">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search for the vlogs here ..."
                        aria-label="Search for the vlogs"
                        aria-describedby="basic-addon2"
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

            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img
                src="/w3images/avatar2.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: '60px' }}
              />
              <span className="w3-right w3-opacity">1 min</span>
              <h4>John Doe</h4>
              <br />
              <hr className="w3-clear" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                <div className="w3-half">
                  <img
                    src="/w3images/lights.jpg"
                    style={{ width: '100%' }}
                    alt="Northern Lights"
                    className="w3-margin-bottom"
                  />
                </div>
                <div className="w3-half">
                  <img
                    src="/w3images/nature.jpg"
                    style={{ width: '100%' }}
                    alt="Nature"
                    className="w3-margin-bottom"
                  />
                </div>
              </div>
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
              >
                <i className="fa fa-thumbs-up"></i>  Like
              </button>
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
              >
                <i className="fa fa-comment"></i>  Comment
              </button>
            </div>

            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img
                src="/w3images/avatar5.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: '60%' }}
              />
              <span className="w3-right w3-opacity">16 min</span>
              <h4>Jane Doe</h4>
              <br />
              <hr className="w3-clear" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
              >
                <i className="fa fa-thumbs-up"></i>  Like
              </button>
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
              >
                <i className="fa fa-comment"></i>  Comment
              </button>
            </div>

            <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img
                src="/w3images/avatar6.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: '60%' }}
              />
              <span className="w3-right w3-opacity">32 min</span>
              <h4>Angie Jane</h4>
              <br />
              <hr className="w3-clear" />
              <p>Have you seen this?</p>
              <img
                src="/w3images/nature.jpg"
                style={{ width: '100%' }}
                className="w3-margin-bottom"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
              >
                <i className="fa fa-thumbs-up"></i>  Like
              </button>
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
              >
                <i className="fa fa-comment"></i>  Comment
              </button>
            </div>
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
