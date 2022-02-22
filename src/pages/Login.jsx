import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
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

  render() {
    const { loading, isRedirect, loginName, btnIsDisabled } = this.state;
    const loginDiv = (
      <div data-testid="page-login">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            data-testid="login-name-input"
            onChange={ this.handleChange }
            value={ loginName }
            name="loginName"
            placeholder="Insira seu nome"
          />
          <button
            disabled={ btnIsDisabled }
            type="submit"
            data-testid="login-submit-button"
          >
            Entrar

          </button>
        </form>
      </div>
    );
    return (
      <div>
        { loading ? <Loading /> : loginDiv }
        { isRedirect && <Redirect to="/search" /> }
      </div>
    );
  }
}
