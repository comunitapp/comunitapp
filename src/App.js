import React, {useState, useEffect} from 'react';
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
  const [favicon, changeFavicon] = useState('fav1')
  const handleChangeFavicon = (fav)=>{
    changeFavicon(fav,()=>{
      changeDynamicManifest('name_'+fav, fav, '/#/share/'+fav)
    })
    
  }
  useEffect(() => {
    // document.title = ${}
  }, []);
  return (
    <Router>
       <div>
        <Favicon url={`${favicon}/icon192.png`}/>
        <button onClick={()=>handleChangeFavicon('fav1')}>Change1</button>
        <button onClick={()=>handleChangeFavicon('fav2')}>Change2</button>
        <button onClick={()=>handleChangeFavicon('fav3')}>Change3</button>
        <button onClick={()=>handleChangeFavicon('fav4')}>Change4</button>
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
