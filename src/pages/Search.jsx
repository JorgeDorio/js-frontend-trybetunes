import React, { Component } from 'react';
import Header from '../components/Header';

const minLengthName = 2;

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      btnIsDisabled: true,
      nameSearched: '',
    };
  }

  checkInput = () => {
    const { nameSearched } = this.state;

    if (nameSearched.length >= minLengthName) {
      this.setState({
        btnIsDisabled: false,
      });
    } else {
      this.setState({
        btnIsDisabled: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.checkInput);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  }

  render() {
    const { nameSearched, btnIsDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Nome da banda ou Artista"
            data-testid="search-artist-input"
            value={ nameSearched }
            name="nameSearched"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ btnIsDisabled }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}
