import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {


	let postsElements = props.posts
	.map( p => <Post message={p.message} like={p.likesCount}/>);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return(
	        <div className={classes.postsBlock}>
	          <h3>My post</h3>
	          <div>
	            <textarea onChange = {onPostChange} ref = {newPostElement} 
	            value = {props.newPostText} />
	            <button onClick = {addPost}>Add post</button>

	          </div>
	          <div className={classes.posts}>
	            {postsElements}
	          </div>
	        </div>
		);
}

export default MyPosts;