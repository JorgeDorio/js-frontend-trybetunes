import React from 'react';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
