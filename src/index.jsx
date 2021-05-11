import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

import CarsIndex from './components/CarsIndex';
import CarsNew from './containers/CarsNew';
import CarsShow from './containers/CarsShow';

import carsReducer from './reducers/carsReducer';

const initialState = {
  garage: prompt('Please enter the name of your garage') || `Anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  cars: carsReducer,
  garage: identityReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" render={props => <CarsNew {...props} />} />
        <Route path="/cars/:id" component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
