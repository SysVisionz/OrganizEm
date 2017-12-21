import { combineReducers } from 'redux';
import OrganizerReducer from './OrganizerReducer';
import SearchReducer from './SearchReducer';
import AuthReducer from '../components/common/reducers/AuthReducer';


export default combineReducers({
	organizer: OrganizerReducer,
	search: SearchReducer,
	auth: AuthReducer
});