import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';


function App() {    

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login}>
            
           </Route>
          <Route path='/' exact component={Home} />
          
        </Switch>
      </Router>
    </>
  );


}

export default App;