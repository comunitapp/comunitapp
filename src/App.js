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
function App() {
  const cookies= cookie.parse(document.cookie)
  const auth = cookies ? cookies.comuniappAuth: null
  const checkAuth = auth?true:false
  console.log(checkAuth, auth)
  return (
    <Router>
       <div>
        

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
