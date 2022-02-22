import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    const { handleSubmit, handleChange, loginName, btnIsDisabled } = this.props;
    return (
      <div data-testid="page-login">
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            data-testid="login-name-input"
            onChange={ handleChange }
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
  }
}

LoginForm.propTypes = {
  btnIsDisabled: PropTypes.any,
  handleChange: PropTypes.any,
  handleSubmit: PropTypes.any,
  loginName: PropTypes.any,
}.isRequired;
