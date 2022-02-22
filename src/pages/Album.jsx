import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      albumId: window.location.pathname.split('/')[2],
      loading: true,
      findedMusics: [],
      renderMusics: false,
    };
  }

  componentDidMount() {
    this.requestMusics();
  }

  requestMusics = async () => {
    const { albumId } = this.state;
    getMusics(albumId).then((music) => {
      this.setState({
        loading: false,
        findedMusics: music,
      });
    });
    this.setState({
      renderMusics: true,
    });
  };

  render() {
    const { loading, findedMusics, renderMusics } = this.state;
    // console.log(typeof(findedMusics[0]));
    // const teste = (<div>
    //   <h2 data-testid="artist-name">{findedMusics[0].artistName}</h2>
    //   <h3 data-testid="album-name">{findedMusics[0].collectionName}</h3>
    //   <ul>
    //       {findedMusics.map((music) => (<li key={ music.trackId }>
    //       <div>
    //           {music.trackName}
    //           <audio controls="controls">
    //           <source src={ music.previewUrl } type="audio/mp3" />
    //         </audio>
    //         </div>
    //       </li>))}
    //     </ul>
    // </div>)
    const albumDiv = (
      <div>
        {renderMusics && findedMusics.length > 0 ? (
          <div>
            <h2 data-testid="artist-name">{findedMusics[0].artistName}</h2>
            <h3 data-testid="album-name">{findedMusics[0].collectionName}</h3>
            <ul>
              {findedMusics.slice(1).map((music) => (
                <li key={ music.trackId }>
                  <div>
                    {music.trackName}
                    <audio
                      data-testid="audio-component"
                      src={ music.previewUrl }
                      controls
                    >
                      <track kind="captions" />
                      O seu navegador não suporta o
                      elemento
                      {' '}
                      <code>audio</code>
                      .
                    </audio>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Não rederizou</p>
        )}
      </div>
    );
    return (
      <div data-testid="page-album">
        <Header />
        <div>{loading ? <Loading /> : albumDiv}</div>
      </div>
    );
  }
}
