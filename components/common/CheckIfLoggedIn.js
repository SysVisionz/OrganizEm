import React, { Component } from 'react';
import firebase from 'firebase';
import { View, AsyncStorage } from 'react-native';
import { Spinner } from './';
import { Actions } from 'react-native-router-flux';

export default class CheckIfLoggedIn extends Component {


	componentDidMount() {
		firebase.auth().onAuthStateChanged( function (user) {
		if( user )
			Actions.main();
		else
			Actions.auth();
		});
	}

	render() {
		return(
			<Spinner size="large" /> 
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}