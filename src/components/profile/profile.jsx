import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';




const Profile = () => {
	return(
			<div className={classes.content}>
	        <div>
	          <img src="https://tripmydream.cc/travelhub/travel/seo/img/306/28/gallery_1445853090_1991075162_fit.jpg" alt=""/>
	        </div>
	        <div>
	          Ava + Description
	        </div>
	        <MyPosts />
	      </div>
		);
}

export default Profile;