import { 
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	UPDATE_VALUE,
	SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	persist: false
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed', password: '', loading: false };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case UPDATE_VALUE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case SIGN_OUT:
			return INITIAL_STATE;
		default:
			return state;
	}
};