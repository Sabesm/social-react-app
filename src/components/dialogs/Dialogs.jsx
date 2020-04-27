import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
			<div className = {classes.dialog + ' ' + classes.active}>
        		<NavLink to={path}>{props.name}</NavLink>
	        </div>
		);
}

const Message = (props) => {
	return (
			<div className={classes.message}>{props.message}</div>
		);
}

const Dialogs = (props) => {

	let dialogsData = [
		{id : 1, name : 'Dima'},
		{id : 2, name : 'Cveta'},
		{id : 3, name : 'Sergey'},
		{id : 4, name : 'Valera'},
		{id : 5, name : 'Evgeniy'}
	];

	let messagesData = [
		{id : 1, message : 'Hi!'},
		{id : 2, message : 'How is your it-kamasutra!?'},
		{id : 3, message : 'Yo!Yo!Yo!'}
	];

	let dialogsElements = dialogsData
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

	let messagesElements = messagesData
	.map( message => <Message message = {message.message} />);

	return(
	        <div className={classes.dialogs}>
				<div className = {classes.dialogsItems}>
					{dialogsElements}
		        </div>
		        <div className={classes.messages}>
					{messagesElements}
		        </div>
	        </div>
		);
}

export default Dialogs;