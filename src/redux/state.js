let rerenderEntireTree = () => {
	console.log("State was Changed");
}

const state = {
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
		]
	}
};

export const addPost = () => {
	let newPost = {
		id : 5,
		message : state.profilePage.newPostText,
		likesCount : 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
} 

export default state;