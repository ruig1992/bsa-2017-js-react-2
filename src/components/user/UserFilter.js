import React, { Component, PropTypes } from 'react';
import { Col, Form, Label, Input, Button, FormGroup, FormFeedback } from 'reactstrap';
import Header from '../../pages/partials/Header';
import Section from '../../pages/partials/Section';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFilterValue } from '../../actions/userActions';

class UserFilter extends Component {

  constructor(props) {
    super(props);

    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(e) {
    this.props.changeFilterValue(e.target.value);
  }

  render() {
    return (
      <div className="input-group mb-3">
        <label className="input-group-addon" htmlFor="filter">
          <i className="fa fa-search fa-fw" aria-hidden="true"></i>
        </label>
        <Input type="text" id="filter" placeholder="Enter the name for search..."
          onInput={this.changeFilter} />
      </div>
    );
  }
}

UserFilter.propTypes = {
  filterValue: PropTypes.string,
  changeFilter: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    filterValue: state.user.filterValue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFilterValue }, dispatch);
}

const UserFilterConnected = connect(mapStateToProps, mapDispatchToProps)(UserFilter);

export default UserFilterConnected;
