const INITIAL_STATE = {
	contents: {
		name: false,
		organizerId: '',
		dimensions: [],
		description: '',
		tags: [],
		items: [],
		nameLocations: {},
		tagLocations: {},
		pulled: [],
	},
	previousContents: [],
	dimensionSelection: [],
	error: '',
	currentList: []
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'changeDimensionSelection':
			return {...state, [dimensionSelection[action.payload.dimension]]: action.payload.value, error:''};
		case 'newOrganizer':
			return { INITIAL_STATE };
		case 'editDimension':
			return {...state, [contents[action.payload.dimension]]: action.payload.value};
		case 'undo':
			contents = previousContents.shift();
			return {contents};
		case 'deleteDimension':
			contents = contents.splice(action.payload.value, 1);
			return {contents};
		case 'fetchOrganizer':
			return { contents: action.payload.value };
		default: return state;
	}
};