import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Profile from './components/profile';

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
