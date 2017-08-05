import React, { Component, PropTypes } from 'react';
import { ListGroupItem, Button } from 'reactstrap';

class UserItem extends Component {

  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this, this.props.user.id);
  }

  deleteUser(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <ListGroupItem className="justify-content-between p-2 pl-3">
        {this.props.user.name}
        <Button className="py-1 px-3" color="danger" onClick={this.deleteUser}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          <span className="sr-only ml-1">Delete</span>
        </Button>
      </ListGroupItem>
    );
  }
}

UserItem.propTypes = {
  user: PropTypes.object,
  onDelete: PropTypes.func,
};

export default UserItem;
