import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const minLengthName = 2;

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      btnIsDisabled: true,
      nameSearched: '',
      findedAlbum: [],
      renderAlbuns: false,
    };
  }

  // componentDidMount() {
  //   this.requestAlbum();
  // }

  requestAlbum = async () => {
    const { nameSearched } = this.state;
    searchAlbumsAPI(nameSearched).then((album) => {
      console.log(album);
      this.setState({
        loading: false,
        findedAlbum: album,
      });
    });
    // searchAlbumsAPI(nameSearched).then(({ album }) => {
    //   this.setState({
    //     loading: false,
    //     findedAlbum: album,
    //   });
    // });
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

    this.setState({
      nameSearched: '',
      btnIsDisabled: true,
      loading: true,
    });
    await this.requestAlbum();
    this.setState({
      renderAlbuns: true,
    });
  }

  render() {
    const { nameSearched, btnIsDisabled, loading, findedAlbum, renderAlbuns } = this.state;
    const renderedAlbuns = findedAlbum.map((album) => (
      <Link
        to={ `/album/${album.collectionId}` }
        key={ album.collectionId }
        data-testid={ `link-to-album-${album.collectionId}` }
      >
        <h2>{album.artistName}</h2>
        <p>
          {' '}
          {album.collectionName}
          {' '}
        </p>
      </Link>

    ));

    const searchDiv = (
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

        {renderAlbuns && findedAlbum.length > 0 ? renderedAlbuns: <p>Nenhum álbum foi encontrado</p>}
        {/* {findedAlbum.map((album) => (
          <p>{album.collectionName}</p>
        ))} */}
      </div>
    );
    return (
      <div>
        { loading ? <Loading /> : searchDiv}

      </div>
    );
  }
}
