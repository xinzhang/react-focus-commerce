import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Topbar from './topbar/Topbar';
import Header from './header/Header';
import TopMenuPage from './navigation/TopMenuPage';

class App extends Component {
  render() {
    return (
      <div>
          <Topbar />
          <Header />
          <TopMenuPage />
          <div className="container col-2">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
