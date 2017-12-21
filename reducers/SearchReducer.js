INITIAL_STATE = {
	text: '',
	dimensions: 0,
	tags: [],
	organizers: [],
	organizerList: []
}

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type){
		case 'updateProp':
			return { ...state, [payload.prop]: payload.value };
		case 'searchOrganizers':
			return { ...state, organizerList: payload.value};
		case 'fetchOrganizers':
			return { ...state, organizers: payload.value};
		default: 
			return state;
	}
}
