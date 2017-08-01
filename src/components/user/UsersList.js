import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import Header from '../../pages/partials/Header';
import Section from '../../pages/partials/Section';
import UserItem from './UserItem';

class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }

    this.deleteUser = this.deleteUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      users: nextProps.users
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.users.length !== this.props.users.length;
  }

  deleteUser(id) {
    this.props.onDelete(id);
  }

  render() {
    const { users } = this.state;

    const usersItems = (users.length > 0) ?
      users.map(user => {
        return (
          <UserItem onDelete={this.deleteUser} key={user.id} user={user} />
        );
      })
    : null;

    return (
      <Section>
        <Header header={'Users list'} />

        <ListGroup className="users-list">{usersItems}</ListGroup>
      </Section>
    );
  }
}

UsersList.propTypes = {
  users: React.PropTypes.array,
  onDelete: React.PropTypes.func,
};

export default UsersList;
