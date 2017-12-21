const INITIAL_STATE = {
	contents: {
		name: '',
		dimensions: []},
	previousContents: [],
	dimensionSelection: [],
	error: '',
	currentList: []
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'addDimension':
			previousContents.splice(0,0,contents);
			if(contents.length < 3)
				contents.push([]);
			else
				return { error: 'Cannot add more than three dimensions to any one Organizer. Create a new Organizer.' };
			return {...state, previousContents, dimensions, contents};
		case 'changeDimensionSelection':
			return {...state, [dimensionSelection[action.payload.dimension]]: action.payload.value, error:''};
		case 'newOrganizer':
			return {INITIAL_STATE};
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