import {rerenderEntireTree} from './../render';

let state = {
	profilePage: {
		posts: [
			{id : 1, message : "Hi, how are you?", likesCount : 12},
			{id : 2, message : "Lala Lala!))", likesCount : 34},
			{id : 1, message : "SUKA BLEAT", likesCount : 5},
			{id : 2, message : "It's my first post", likesCount : 51}
		]
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

export let addPost = (postMessage) => {
	let newPost = {
		id : 5,
		message : postMessage,
		likesCount : 0
	};

	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}

export default state;