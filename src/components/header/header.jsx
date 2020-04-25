import React from 'react';
import classes from './header.module.css';


const Header = () => {
	return(
		<header className={classes.header}>
        	<img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png" alt=""/>
      	</header>
		);
}

export default Header;