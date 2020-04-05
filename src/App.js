import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import cookie from 'cookie'
import Start from './components/Start'
import Join from './components/Join'
import Share from './components/Share'
import Dashboard from './components/Dashboard'
import firebase from 'firebase'
import Favicon from 'react-favicon'
import {changeDynamicManifest} from './Utils'

function App() {
  const cookies= cookie.parse(document.cookie)
  const auth = cookies ? cookies.comuniappAuth: null
  const checkAuth = auth?false:false
  console.log(checkAuth, auth)
  return (
    <Router>
       <div>
        <Favicon url={["fav4/icon192.png", "fav2/icon192.png", "fav3/icon192.png"]}/>
        <button onClick={()=>changeDynamicManifest('ei1', 'fav1', '/#/share/op')}>Change1</button>
        <button onClick={()=>changeDynamicManifest('ei2', 'fav2', '/#/share/op2')}>Change2</button>
        <button onClick={()=>changeDynamicManifest('ei3', 'fav3', '/#/share/op3')}>Change3</button>
        <button onClick={()=>changeDynamicManifest('ei4', 'fav4', '/#/share/op4')}>Change4</button>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            {!checkAuth? (
              <Redirect to='/start'/>
            ):(
              <Dashboard auth={auth}></Dashboard>
            )}
          </Route>
          <Route path="/join/:id">
            <Join></Join>
          </Route>
          <Route path="/share/:id">
            <Share></Share>
          </Route>
          <Route path="/start">
            <Start></Start>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
