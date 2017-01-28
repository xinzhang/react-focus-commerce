import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './topbar/Topbar';
import Header from './header/Header';
import TopMenu from './navigation/TopMenu';
import LeftPage from './navigation/LeftPage';

class App extends Component {
  render() {
    return (
      <div>
          <Topbar />
          <Header />
        <TopMenu />
      <div className="container col-2">
        <div className="row">
          <LeftPage />
          <div id="content" className="col-sm-9">
            <span>main content</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
