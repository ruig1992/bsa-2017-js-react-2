import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header
    }
  }

  render() {
    const { header } = this.state;

    return (
      <header id="header" className="mb-4 mb-md-5">
        <h2 className="h4">{header}</h2>
      </header>
    );
  }
}

Header.propTypes = {
  header: React.PropTypes.string
};

export default Header;
