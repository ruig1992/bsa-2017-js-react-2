import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import AddUserForm from '../components/user/AddUserForm';
import UsersList from '../components/user/UsersList';

class Users extends Component {

  render() {
    return (
      <Row className="users-manager">
        <Col xs="12" sm="5">
          <AddUserForm />
        </Col>
        <Col xs="12" sm="7">
          <UsersList />
        </Col>
      </Row>
    )
  }
}

export default Users;
