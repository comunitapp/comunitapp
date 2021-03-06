import React,{} from 'react';
import {
  Redirect
} from "react-router-dom";
import { Tab } from 'semantic-ui-react'
const panes = [
  {
    menuItem: 'Tab 1',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
]
function Dashboard(props) {
  
return (<><div>auth: {props.auth}</div> <Tab panes={panes} /></>)
}

export default Dashboard;
