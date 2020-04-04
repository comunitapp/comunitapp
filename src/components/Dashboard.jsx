import React from 'react';
import {
  Redirect
} from "react-router-dom";

function Dashboard(props) {
  const checkAuth = true
  
  return !checkAuth?(
    <Redirect to="/start"/>
  ):(
    <h3>Dashboard: {props.auth}</h3>
  )
}

export default Dashboard;
