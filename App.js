import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import combineReducers from './reducers';
import config from './config.json';

export default class App extends Component {

	componentWillMount() {
	firebase.initializeApp(config);
	};

	render() {
		return (
			<Provider store={createStore(combineReducers, {}, applyMiddleware(ReduxThunk))}>
        		<Router />
      		</Provider>
		);
	}
}