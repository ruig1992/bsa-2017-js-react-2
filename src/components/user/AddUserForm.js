import React, { Component } from 'react';
import { Col, Form, Label, Input, Button, FormGroup, FormFeedback } from 'reactstrap';
import Header from '../../pages/partials/Header';
import Section from '../../pages/partials/Section';

class AddUserForm extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      error: {
        hasError: false,
        msg: '',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange(fieldName, e) {
    this.setState({
      error: {
        hasError: e.target.value.trim().length === 0,
        msg: this.props.errMsg[fieldName]
      }
    });
  }

  handleSubmit(e) {
    let username = this.username.value.trim();

    e.preventDefault();

    if (username.length === 0) {
      this.setState({
        error: {
          hasError: true,
          msg: this.props.errMsg.username
        }
      });
      return;
    }

    this.setState({user: {
      name: username,
    }}, function() {
      this.props.addUser(this.state.user);
    });

    this.username.value = '';
    this.username.focus();
  }

  render() {
    const { error } = this.state;

    return (
      <Section>
        <Header header={'Add User'} />

        <Form className="px-0 px-sm-2" onSubmit={this.handleSubmit}>
          <FormGroup row {...error.hasError ? {color: 'danger'} : {}}>
            <Col xs="12" md="3">
              <Label htmlFor="username" className="form-control-label col-form-label noselect">Name</Label>
            </Col>

            <Col xs="12" md="9">
              <Input type="text" id="username" name="username" autoFocus getRef={(input) => { this.username = input; }} onInput={this.onFieldChange.bind(this, 'username')} {...error.hasError ? {className: 'form-control-danger'} : {}} />

              {error.hasError && <FormFeedback>{error.msg}</FormFeedback>}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 9, offset: 3 }}>
              <Button type="submit" className="md-w-100" color="primary" disabled={error.hasError}>
                <i className="fa fa-floppy-o fa-lg mr-1" aria-hidden="true"></i> Add
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Section>
    );
  }
}

AddUserForm.defaultProps = {
  errMsg: {
    username: 'Username is required!'
  }
};

AddUserForm.propTypes = {
  addUser: React.PropTypes.func,
  errMsg: React.PropTypes.object,
};

export default AddUserForm;
