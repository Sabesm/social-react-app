import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
	return(
	        <div>
	          My post
	          <div>
	            <textarea></textarea>
	            <button>Add post</button>

	          </div>
	          <div className={classes.posts}>
	            <Post message='Hi, how are you?' like='53'/>
	            <Post message="It's my first post" like='14' />
	          </div>
	        </div>
		);
}

export default MyPosts;