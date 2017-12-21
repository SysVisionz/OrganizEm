import firebase from 'firebase';


export const fetchOrganizers = (dispatch) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/organizers`)
		.on('value', snapshot => {
			dispatch({type: 'fetchOrganizers', payload: snapshot.val() });
		});
	};
};

const searchArray = (array, value, exact) => {
	for (i in array){
		if (exact && i == value){
			return true;
		}
		else if (!exact && i.indexOf(value) != -1){
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
		for (let i = 0; i < parts.length; i++){
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
		if (!searchArray(organizer.tags, tag)){
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
		payload: organizerList
	};
};

export const updateProp = (prop, value) => {
	return {
	 	type: 'updateProp',
	 	payload: { 
	 		prop: prop,
	 		value: value
	 	}
	};
};