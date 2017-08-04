require('styles/vendor');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import promise from 'redux-promise';

import AppIndex from 'components';
import reducers from 'reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Router>
        <div>
          <Route path="/" component={AppIndex}></Route>
        </div>
      </Router>
    </div>
  </Provider>
  , document.querySelector('.container'));
