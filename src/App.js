import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';




const App = (props) => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'>
          <DialogsContainer />
        </Route>
        <Route path='/profile/:userId?'>
          <ContentContainer />
        </Route>
        <Route path='/users'>
          <UsersContainer />
        </Route>


      </div>
    </div>
  );
}

export default App;
