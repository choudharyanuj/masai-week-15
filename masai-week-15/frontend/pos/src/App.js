import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home'
import Edit from './component/Edit'
import Create from './component/create'
import Delete from './component/Delete'
function App() {
  return (
    <div className="row offset-2">
       <Router>
        <Route path="/home"><Home /></Route>
        <Route path="/change/:id" render={(props) => { return (<Edit  {...props} />) }} ></Route>
        <Route path="/delete/:id" render={(props) => { return (<Delete  {...props} />) }}></Route>
        <Route path="/create"><Create /></Route>
      </Router>
    </div>
  );
}

export default App;
