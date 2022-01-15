import React, { Component } from 'react';

export class AboutUs extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">Coming soon !</p>
        <hr className="my-4" />
        <p>This is still in Development Stage, More feature to come.</p>
        <a className="btn btn-primary btn-lg" href="!#" role="button">
          Fill Free to Contact. Design and Developed By&nbsp;{process.env.REACT_APP_MY_NAME}
        </a>
      </div>
    );
  }
}

export default AboutUs;
