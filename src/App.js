import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Header from  './components/common/Header';
import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
