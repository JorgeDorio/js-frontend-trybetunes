import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.requestUser();
  }

  requestUser = async () => {
    getUser().then(({ name }) => {
      this.setState({
        loading: false,
        userName: name,
      });
    });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        { loading ? <Loading /> : <h1 data-testid="header-user-name">{userName}</h1>}
      </header>
    );
  }
}
