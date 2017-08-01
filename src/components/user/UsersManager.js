import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import AddUserForm from './AddUserForm';
import UsersList from './UsersList';

class UsersManager extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
    }

    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  handleAddUser(newUser) {
    const users = this.state.users;

    newUser.id = Date.now();

    this.setState({
      users: [...users, newUser]
    });
  }

  handleDeleteUser(id) {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== id)
    }));
  }

  render() {
    const { users } = this.state;

    return (
      <Row className="users-manager">
        <Col xs="12" sm="5">
          <AddUserForm addUser={this.handleAddUser} />
        </Col>
        <Col xs="12" sm="7">
          <UsersList users={users} onDelete={this.handleDeleteUser} />
        </Col>
      </Row>
    )
  }
}

export default UsersManager
