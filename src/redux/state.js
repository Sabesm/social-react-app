import profileReducer from './profile-reducer';
import sitebarReducer from './sitebar-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
	_state : {
		profilePage: {
			posts: [
				{id : 1, message : "Hi, how are you?", likesCount : 12},
				{id : 2, message : "Lala Lala!))", likesCount : 34},
				{id : 1, message : "SUKA BLEAT", likesCount : 5},
				{id : 2, message : "It's my first post", likesCount : 51}
			],
			newPostText : "HA-ha-HA"
		},
		dialogsPage: {
			dialogs: [
				{id : 1, name : 'Dima'},
				{id : 2, name : 'Cveta'},
				{id : 3, name : 'Sergey'},
				{id : 4, name : 'Valera'},
				{id : 5, name : 'Evgeniy'}
			],
			messages: [
				{id : 1, message : 'Hi!'},
				{id : 2, message : 'How is your it-kamasutra!?'},
				{id : 3, message : 'Yo!Yo!Yo!'}
			],
			newMessageBody : ''
		},
		sitebar : {}
	},
	_callSubscriber() {
		console.log("State was Changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sitebar = sitebarReducer(this._state.sitebar, action);
		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;