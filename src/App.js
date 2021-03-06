import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/Dialogs';
import Music from './components/music/Music';
import News from './components/news/News';
import Settings from './components/settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

const App = (props) => {
  return (
  	<BrowserRouter>
	    <div className="app-wrapper">
	      <Header />
	      <Nav />
	      <div className = 'app-wrapper-content'>
	      	<Route path = '/dialogs' 
	      		render = { () => <Dialogs 
	      			store = {props.store} /> } />
	      	<Route path = '/profile' 
	      		render = { () => <Profile 
	      			profilePage={props.state.profilePage}
	      			dispatch={props.dispatch} /> } />
			<Route path = '/music' component = {Music} />
	      	<Route path = '/news' component = {News} />
	      	<Route path = '/settings' component = {Settings} />
	      </div>
	    </div>
    </BrowserRouter>
  );
}

export default App;
