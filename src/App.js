import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MainNav from './pages/partials/MainNav';

import './app.css';

class App extends Component {

  render() {
    return (
      <div id="application">
        <MainNav />

        <Container className="p-4">
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default App;
