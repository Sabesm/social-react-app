import React from 'react';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
