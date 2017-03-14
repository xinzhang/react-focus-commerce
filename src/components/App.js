import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../actions/accountActions';

//import logo from './logo.svg';
import './App.css';
import Topbar from './topbar/Topbar';
import Header from './header/Header';
import TopMenuPage from './navigation/TopMenuPage';

class App extends Component {
  componentWillMount() {
    console.log('load user from token');
    this.props.actions.loadUserFromToken();
  }

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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
