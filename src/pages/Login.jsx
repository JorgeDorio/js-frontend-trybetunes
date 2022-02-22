import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import LoginForm from '../components/LoginForm';
import { createUser } from '../services/userAPI';

const minLengthName = 3;

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      btnIsDisabled: true,
      loading: false,
      isRedirect: false,
    };
  }

  checkInput = () => {
    const { loginName } = this.state;

    if (loginName.length >= minLengthName) {
      this.setState({
        btnIsDisabled: false,
      });
    } else {
      this.setState({
        btnIsDisabled: true,
      });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.checkInput);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const { loginName } = this.state;
    await createUser({ name: loginName });
    this.setState({
      isRedirect: true,
    });
  }

  generateForm = () => {
    const { loginName, btnIsDisabled } = this.state;

    return (
      <LoginForm
        handleSubmit={ this.handleSubmit }
        handleChange={ this.handleChange }
        loginName={ loginName }
        btnIsDisabled={ btnIsDisabled }
      />
    );
  }

  render() {
    const { loading, isRedirect } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : this.generateForm() }
        { isRedirect && <Redirect to="/search" /> }
      </div>
    );
  }
}
