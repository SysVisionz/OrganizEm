INITIAL_STATE = {
	text: '',
	tags: [],
	dimensions: 0,
	visible: null,
}

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type){
		case 'updateProp':
			return { ...state, [payload.prop]: payload.value };
		case 'search':
			return { ...state, visible: payload.value};
		case 'noSearch':
			return { ...state, visible: null}
		default: 
			return state;
	}
}
