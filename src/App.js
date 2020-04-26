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

const App = () => {
  return (
  	<BrowserRouter>
	    <div className="app-wrapper">
	      <Header />
	      <Nav />
	      <div class = 'app-wrapper-content'>
	      	<Route path = '/dialogs' component = {Dialogs} />
	      	<Route path = '/profile' component = {Profile} />
			<Route path = '/music' component = {Music} />
	      	<Route path = '/news' component = {News} />
	      	<Route path = '/settings' component = {Settings} />
	      </div>
	    </div>
    </BrowserRouter>
  );
}

export default App;
