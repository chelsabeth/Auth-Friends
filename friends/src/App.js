import React from 'react';
import './App.css';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Welcome to my Auth-Friends App!</h1>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
