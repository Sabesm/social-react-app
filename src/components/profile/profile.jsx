import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return(
		<div className={classes.content}>
			<ProfileInfo />
	        <MyPosts posts={props.state.posts}/>
	    </div>
		);
}

export default Profile;