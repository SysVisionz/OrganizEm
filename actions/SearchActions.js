import firebase from 'firebase';
import { compareEntries } from '../components/common';

export const fetchOrganizers = (dispatch) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/organizers`)
		.on('value', snapshot => {
			dispatch({
				type: 'fetchOrganizers', 
				payload: {
					value: snapshot.val()
				} 
			});
		});
	};
};

const searchArrayPart = (array, value) => {
	for (const i in array){
		if (i.indexOf(value) != -1){
			return true;
		}
	}
	return false;
};

const separateSearch = (searchString) => {
	let retVals = [];
	let oddEven;
	if (searchString.indexOf('"') != -1){
		let parts = searchString.split('"');
		if (searchString.indexOf('"') == 0){
			oddEven = 2;
			console.log("first");
        }
		else {
			oddEven = 1;
			console.log("not first");
        }
		for (const i = 0; i < parts.length; i++){
			if (i % 2 == oddEven){
				retVals.push(parts[i].trim());
            }
			else {
				for (const item of parts[i].trim().split(' ')){
					retVals.push(item);
                }
            }
        }
    }
	return retVals;
};

const validateOrganizer = (organizer, text, dimensions, tags) => {
	if (dimensions != organizer.dimensions)
		return false;
	const searchItems = separateSearch(text);
	for (const item of searchItems){
		if (organizer.name.indexOf(item) == -1 ){
			return false;
		}
	}
	for (const tag of tags){
		if (!searchArrayPart(organizer.tags, tag)){
			return false;
		}
	}
	return true;
};

export const searchOrganizers = (text, dimensions, tags, organizers) => {
	let organizerList = [];
	for (const organizer of organizers){
		if (validateOrganizer(organizer, text, dimensions, tags))
			organizerList.push(organizer);
	}
	return {
		type: 'searchOrganizers',
		payload: {
			value: organizerList
		}
	};
};

const inNames = ( searchText, names, nameLocations ) => {
	let retVals = [];
	for (const i of names){
		if (i.indexOf(searchText) != -1){
			for (const dimension in retVals){
				if (retVals[dimension].indexOf(tagLocations[tag][dimension] == -1))
					retVals[dimension].push(tagLocations[tag][dimension]);
			}
		}
	}
	return retVals;
}

const inTags = ( searchTags, tags, tagLocations ) => {
	let retVals = [];
	for (const tag of searchTags) =>
		if (tags.indexOf(tag) != -1){
			for (const dimension in tagLocations[tag]){
				if (retVals[dimension].indexOf(tagLocations[tag][dimension] == -1))
					retVals[dimension].push(tagLocations[tag][dimension]);
			}
		}
	}
	return retVals;
}

export const itemSearch = (searchText, searchTags, tags, names, tagLocations, nameLocations) => {
	if (searchText && searchTags[0])
		return {
			type: 'visible',
			payload: {
				value: compareEntries(inNames(searchText, names, nameLocations), inTags(searchTags, tags, tagLocations))
			}
		};
	else if (searchText)
		return {
			type: 'visible',
			payload: {
				value: inNames(searchText, names, nameLocations)
			}
		};
	else if (searchTags)
		return {
			type: 'visible',
			payload: {
				value: inTags(searchTags, tags, tagLocations)
			}
		};
	else {
		return {
			type: 'noSearch',
		};
	}
}

export const updateProp = (prop, value) => {
	return {
	 	type: 'updateProp',
	 	payload: { 
	 		prop: prop,
	 		value: value
	 	}
	};
};