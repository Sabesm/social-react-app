import React from 'react';
import classes from './profile.module.css';


const Profile = () => {
	return(
			<div className={classes.content}>
	        <div>
	          <img src="https://tripmydream.cc/travelhub/travel/seo/img/306/28/gallery_1445853090_1991075162_fit.jpg" alt=""/>
	        </div>
	        <div>
	          Ava + Description
	          <img src="https://avatars.mds.yandex.net/get-pdb/1908156/21ed4fa2-1e8d-43d0-8d5c-67afaf3274a6/s1200" alt=""/>
	        </div>
	        <div>
	          My post
	          <div>
	            New post
	          </div>
	          <div>
	            <div>
	              post 1
	            </div>
	            <div>
	              post 2
	            </div>
	          </div>
	        </div>
	      </div>
		);
}

export default Profile;