require('styles/vendor');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from 'components/posts_index';
import PostsNew from 'components/posts_new';
import reducers from 'reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/posts/new" component={PostsNew}></Route>
            <Route path="/" component={PostsIndex}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>
  , document.querySelector('.container'));
