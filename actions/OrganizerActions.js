import { Actions } from 'react-native-router-flux';
import { uniqueId } from '../components/common';

export const openOrganizem = dispatch => {
	const {currentUser} = firebase.auth();
	return dispatch => {
		firebase.ref(`users/${currentUser.uid}/currentOrganizerId`)
		.on('value', snapshot => {
			firebase.ref(`organizers/${snapshot.val()}/`)
			.on('value', snapshot => {
				dispatch({
					type: 'fetchOrganizer',
					payload: snapshot.val()
				});
			});
		});
	}
}

export const newOrganizer = (name, dimensions, description, tags, dispatch) => {
	return dispatch => {
		const {currentUser} = firebase.auth()
		const organizerId = uniqueId();
		const members = [firebase.auth().currentUser];
		const admin =  [firebase.auth().currentUser];
		firebase.database().ref(`/organizers/${organizerId}/contents`)
		.push({ name, organizerId, dimensions, description, tags, members, admin })
		.then(() => {
			firebase.database().ref(`users/${currentUser.uid}/organizers`)
			.push(organizerId)
			.then(() => {
				Actions.pop();
				dispatch({ type: 'newOrganizer' });
			})
			.catch((error) => {
				console.log(error);
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}		

export const changeSelection = (dimension, value) => {
	return{
		type: 'changeSelection',
		payload: { 
			dimension, 
			value 
		}
	};
};

export const undo = () => {
	return dispatch => {
		dispatch({type: 'undo'})
	};
};

export const fetchOrganizer = (currentOrganizerId, dispatch) => {
	const {currentUser} = firebase.auth();
	return dispatch => {
		firebase.database().ref(`users/${currentUser.uid}/`)
		.set({currentOrganizerId});
		firebase.database().ref(`organizers/${currentOrganizerId}/`)
		.on('value', snapshot => {
			dispatch({
				type: 'fetchOrganizer',
				payload: snapshot.val()
			});
		});
	};
};

export const fetchItems = (value, dispatch, organizerId) => {
	return dispatch => {
		firebase.database().ref(`organizers/${organizerId}/`)
		.on('value', snapshot => dispatch({
			type: 'fetchDimension',
			payload: snapshot.val()
		}));
	};
};

export const changeItemQuantity = (organizerId, itemId, dispatch) => {
	location = location.join('/')
	if (quantity < 1) {
		return dispatch => {
			firebase.database().ref(`organizers/${organizerId}/${itemId}/`)
			.remove()
			.then(Actions.main());
		};
	}
	else {
		return dispatch => {
			firebase.database().ref(`organizers/${organizerId}/contents/${location}/${value}/`)
			.set(quantity)
			.then(Actions.main());
		};
	}
};

export const giveAccess = (uid, isGroup, groupId) => {
	return (dispatch ) => {
		//isGroup is true if the person is being invited to a GROUP of Organizers, and false if the person is being invited to just one Organizer.
		//Since groups of Organizers will not be featured in the initial release, this aspect of the function is purely for future use.

	};
};