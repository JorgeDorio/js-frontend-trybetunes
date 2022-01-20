import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Content />

        {/* <Switch>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile" component={ Profile } />
          <Route
            path="/profile/edit"
            render={ (props) => (
              <ProfileEdit { ...props } />) }
          />
          <Route path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </Switch> */}
      </BrowserRouter>
    );
  }
}

export default App;
