import React, { Component } from 'react';
import Header from './partials/Header';

class Home extends Component {

  render() {
    return (
      <div>
        <Header header={'Home page'} />

        <div className="react-logo-wrapper d-flex justify-content-center align-items-center">
          <div className="react-logo"></div>
        </div>
      </div>
    )
  }
}

export default Home;
