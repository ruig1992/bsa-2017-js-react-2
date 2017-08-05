import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Collapse,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="inverse" inverse toggleable>
        <NavbarToggler right onClick={this.toggleNavbar} />
        <NavbarBrand tag={IndexLink} to="/">BSA 2017. React JS</NavbarBrand>

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/users" activeClassName="active">Users list</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
