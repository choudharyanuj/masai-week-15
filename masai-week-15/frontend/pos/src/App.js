import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/home'
import Edit from './component/Edit'
import Create from './component/create'
// import Delete from './component/Delete'
function App() {
  return (
    <div className="row offset-2">
       <Router>
        <Route path="/home"><Home /></Route>
        <Route path="/change/:id" render={(props) => { return (<Edit  {...props} />) }} ></Route>
        {/* <Route path="/delete/:item_no" render={(props) => { return (<Delete  {...props} />) }}></Route> */}
        {/* <Route path="/mark/:item_no" render={(props) => { return (<Mark  {...props} />) }}></Route> */}
        <Route path="/create"><Create /></Route>
        {/* <Route path="/done"><Done /></Route> */}
      </Router>
    </div>
  );
}

export default App;
