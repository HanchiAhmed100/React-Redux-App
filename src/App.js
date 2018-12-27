import React, { Component } from 'react';
import Hanchi from './component/hanchi'
import AppNavBar from './component/AppNavBar'
import AppEventList from './component/AppEventList'

import { Provider } from 'react-redux'
import store from './store'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Hanchi />
          <AppEventList />
        </div>
      </Provider>
    );
  }
}

export default App;
