import React from 'react';
import classes from './Post.module.css';


const Posts = (props) => {
	return(
	        <div className = {classes.item}>
            	<img src="https://i.redd.it/wtc3gq9qhe041.jpg" alt=""/>
            	{props.message}
            	<div>
            		<span>{props.like} Like</span>
            	</div>
	        </div>
		);
}

export default Posts;