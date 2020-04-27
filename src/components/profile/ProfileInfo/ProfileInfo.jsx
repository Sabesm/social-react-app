import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
	return(
			<div>
				<div>
					<img src="https://tripmydream.cc/travelhub/travel/seo/img/306/28/gallery_1445853090_1991075162_fit.jpg" alt=""/>
				</div>
				<div className={classes.descriptionBlock}>
					Ava + Description
				</div>
			</div>
		);
}

export default ProfileInfo;