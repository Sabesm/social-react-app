import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {


	let postsElements = props.posts
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