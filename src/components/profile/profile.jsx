import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';






const Profile = () => {
	return(
		<div className={classes.content}>
			<ProfileInfo />
	        <MyPosts />
	    </div>
		);
}

export default Profile;