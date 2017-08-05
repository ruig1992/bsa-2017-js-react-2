import React, { Component } from 'react';

class Section extends Component {

  constructor(props) {
    super(props);

    this.state = {
      className: this.props.className || ''
    }
  }

  render() {
    const { className } = this.state;

    return (
      <section className={"page-section " + className}>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  className: React.PropTypes.string
};

export default Section;
