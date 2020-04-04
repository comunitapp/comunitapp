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

import {changeDynamicManifest} from './Utils'

const firebaseConfig  = {
  apiKey: "AIzaSyC1PHvcpBIoie4ZiNhGMI_YTf8EQIl0JTY",
  authDomain: "comunit-app.firebaseapp.com",
  databaseURL: "https://comunit-app.firebaseio.com",
  projectId: "comunit-app",
  storageBucket: "comunit-app.appspot.com",
  messagingSenderId: "118962740484",
  appId: "1:118962740484:web:9b83050c29f521be03c451"
}
firebase.initializeApp(firebaseConfig )


function App() {
  const cookies= cookie.parse(document.cookie)
  const auth = cookies ? cookies.comuniappAuth: null
  const checkAuth = auth?false:false
  console.log(checkAuth, auth)
  return (
    <Router>
       <div>
       <a href="fav2/icon192.png">1</a><br></br>
       <a href="/fav2/icon192.png">2</a><br></br>
        <button onClick={()=>changeDynamicManifest('ei', 'fav1')}>Change1</button>
        <button onClick={()=>changeDynamicManifest('ei', 'fav2')}>Change2</button>
        <button onClick={()=>changeDynamicManifest('ei', 'fav3')}>Change3</button>
        <button onClick={()=>changeDynamicManifest('ei', 'fav4')}>Change4</button>

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
