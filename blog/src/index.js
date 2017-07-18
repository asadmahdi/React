import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//C:\\Users\\Syed\\Documents\\blogReactApp\\ReduxSimpleStarter\\src\\actions'
import promise from 'redux-promise';

import reducers from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\reducers';
import PostsIndex from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\components\\posts_index';
import PostsNew from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\components\\posts_new';
import PostsShow from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\components\\posts_show';




const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/"          component={PostsIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
