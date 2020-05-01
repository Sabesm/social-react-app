import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	sitebar : sitebarReducer
});

let store = createStore(reducers);

export default store;