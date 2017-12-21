import { 
	AsyncStorage, 
	Alert 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOGIN_USER, 
	UPDATE_VALUE,
	SIGN_OUT
} from './types';

const createUser = (email, password, persist, dispatch) => {
		if (persist){
			firebase.auth().setPersistence('local')
			.then(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFail(dispatch));
			});
		}
		else{
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		}
};

export const updateValue = ( prop, value ) => {
	return { type: UPDATE_VALUE,
		payload: {
			prop: prop,
			value: value
		} }
}

export const loginUser = (email, password, persist, dispatch) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		if (persist){
			firebase.auth().setPersistence('local')
			.then (() => {
				firebase.auth().signInWithEmailAndPassword(email, password)
				.then( user => loginUserSuccess(dispatch, user))
				.catch((error) => {
					console.log(error);
					if (error.code === 'auth/user-not-found') {
					Alert.alert(
						'User Not Found',
						'Create this user Account?',
						[
							{ text: 'Yes', onPress: () => createUser(email, password, dispatch) },
							{ text: 'No', onPress: () => loginUserFail(dispatch) }
						]);
					} else {
						loginUserFail(dispatch);
					}
				});
			})
		}
		else {
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then( user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				console.log(error);
				if (error.code === 'auth/user-not-found') {
				Alert.alert(
					'User Not Found',
					'Create this user Account?',
					[
						{ text: 'Yes', onPress: () => createUser(email, password, dispatch) },
						{ text: 'No', onPress: () => loginUserFail(dispatch) }
					]);
				} else {
					loginUserFail(dispatch);
				}
			});
		}
	};
}

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	Actions.main();
}

export const signUserOut = (dispatch) => {
	console.log('signing out...');
	return (dispatch) => {
		dispatch({ type: SIGN_OUT });
		firebase.auth().signOut()
		.then(() => {
			Actions.auth();
		})
		.catch((error) => console.log(error))
	}
};
