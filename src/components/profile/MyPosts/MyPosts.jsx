import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

	let postsData = [
		{id : 1, message : "Hi, how are you?", likesCount : 12},
		{id : 2, message : "Lala Lala!))", likesCount : 34},
		{id : 1, message : "SUKA BLEAT : 5"},
		{id : 2, message : "It's my first post", likesCount : 51}
	];

	let postsElements = postsData
	.map( p => <Post message={p.message} like={p.likesCount}/>);

	return(
	        <div className={classes.postsBlock}>
	          <h3>My post</h3>
	          <div>
	            <textarea></textarea>
	            <button>Add post</button>

	          </div>
	          <div className={classes.posts}>
	            {postsElements}
	          </div>
	        </div>
		);
}

export default MyPosts;