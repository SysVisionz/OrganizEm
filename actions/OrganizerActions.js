import { Actions } from 'react-native-router-flux';

export const newOrganizer = (name, description, diemnsions, tags) => {
	return {
		type: 'newOrganizer',
		payload: {
			name,
			description,
			dimensions,
			tags
		}
	}
}		

export const changeSelection = (dimension, value) => {
	return {
		type: 'changeSelection',
		payload: { 
			dimension, 
			value 
		}
	};
};

export const addDimension = () => {
	return (dispatch) => {
		type: 'addDimension'
	};
};

export const undo = () => {
	return (dispatch) => {
		dispatch({type: 'undo'})
	};
};

export const deleteDimension = (value) => {
	return {
		type: 'deleteDimension',
		payload: value
	};
};

export const fetchOrganizer = (value) => {
	return {
		type: 'fetchOrganizer',
		payload: value
	};
};

export const fetchDimension = (value) => {
	return {
		type: 'fetchDimension',
		payload: value
	};
};

export const deleteItem = (value) => {
	//deleteItem removes an item from a dimension.
	return (dispatch) => {
		dispatch({
			type: 'deleteItem',
			payload: value
		})
	};
};

export const giveAccess = (uid, isGroup, groupId) => {
	return (dispatch ) => {
		//isGroup is true if the person is being invited to a GROUP of Organizers, and false if the person is being invited to just one Organizer.
		//Since groups of Organizers will not be featured in the initial release, this aspect of the function is purely for future use.

	};
};