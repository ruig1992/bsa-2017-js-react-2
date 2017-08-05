import React, { Component, PropTypes } from 'react';
import { ListGroup } from 'reactstrap';
import Header from '../../pages/partials/Header';
import Section from '../../pages/partials/Section';
import UserFilter from './UserFilter';
import UserItem from './UserItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/userActions';

class UsersList extends Component {

  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const oldUserState = this.props.userState,
      newUserState = nextProps.userState;

    return newUserState.users.length !== oldUserState.users.length ||
      newUserState.filterValue !== oldUserState.filterValue;
  }

  deleteUser(id) {
    this.props.deleteUser(id);
  }

  render() {
    const { users, filterValue } = this.props.userState;

    const usersItems = (users.length > 0)
      ? users.filter(
          (user) => user.name.toLowerCase().includes(filterValue)
        ).map(user => {
          return (
            <UserItem onDelete={this.deleteUser} key={user.id} user={user} />
          );
        })
      : null;

    return (
      <Section>
        <Header header={'Users list'} />

        <UserFilter />
        <ListGroup className="users-list">{usersItems}</ListGroup>
      </Section>
    );
  }
}

UserFilter.propTypes = {
  deleteUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    userState: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteUser }, dispatch);
}

const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListConnected;
