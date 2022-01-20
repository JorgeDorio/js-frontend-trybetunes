// Importando dependencias
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default class Content extends Component {
  render() {
    return (
      // Criando rotas
      <Switch>
        <Route path="/search" render={ (props) => <Search { ...props } /> } />
        <Route path="/album/:id" render={ (props) => <Album { ...props } /> } />
        <Route exact path="/profile" render={ (props) => <Profile { ...props } /> } />
        <Route path="/favorites" render={ (props) => <Favorites { ...props } /> } />
        <Route
          path="/profile/edit"
          render={ (props) => <ProfileEdit { ...props } /> }
        />
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/*" render={ (props) => <NotFound { ...props } /> } />
      </Switch>
    );
  }
}
