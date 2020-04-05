import React, {useState} from 'react';
import cookie from 'cookie'
import { Icon, Step, Button } from 'semantic-ui-react'
import UserForm from './start/UserForm'
import CommunityForm from './start/CommunityForm'
import useDimensions from "react-use-dimensions";
import firebase from 'firebase'
import {initFirebase} from '../Utils.js'
initFirebase()
let db = firebase.firestore();
const saveToFirebase = (userData, communityData)=>{
  let refNewUser = db.collection("users").doc()
  let refNewCommunity = db.collection("communities").doc()
  return Promise.all([refNewUser.set({...userData,communityRef:refNewCommunity}),refNewCommunity.set({...communityData, creator:refNewUser, users:[refNewUser]})])
  
}

function Start() {
  // document.cookie=cookie.serialize('comuniappAuth', 'hey')
  const [ref, { x, y, width }] = useDimensions();
  const [userData, changeUserData] = useState({
    name: null,
    floor: null,
    stairs: null,
    door: null,
    visibleName: true,
    visibleName: true
  })
  const [communityData, changeCommunityData] = useState({
    name: 'comm',
    lat: 41.3870154,
    lng: 2.1700471,
    radius: 20,
    color: 'white'
  })
  const [activeTab, changeActiveTab] = useState(1)
  const [confirmed, changeConfirmed] = useState(false)
  const [loaded, changeLoaded] = useState(false)
  const onSubmitUserData = (newUser)=>{
    changeUserData(newUser)
    changeActiveTab(1)
  }
  const onSubmitCommunityData = (newCommunity)=>{
    changeCommunityData(newCommunity)
    changeActiveTab(2)
    
  }
  const onConfirm = ()=>{
    saveToFirebase(userData, communityData).then(()=>{
      changeLoaded(true)
    })
  }
  return (<>
    <div ref={ref} class="containerSteps">
    <Step.Group>
      {width>900|activeTab>=0|confirmed?<Step active={activeTab==0} completed={activeTab>0} onClick={()=>changeActiveTab(0)}>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>:<></>}
    
      {width>900|activeTab>=1|confirmed?<Step active={activeTab==1} completed={activeTab>1}  onClick={()=>changeActiveTab(1)}>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>:<></>}

      {width>900|activeTab>=2|confirmed?<Step active={activeTab==2} completed={activeTab>2}  onClick={()=>changeActiveTab(2)}>
        <Icon name='info' />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>:<></>}
    </Step.Group>
    {activeTab==0 && <UserForm changeUserData={onSubmitUserData} userData={userData}/>}
    {activeTab==1 && <CommunityForm changeCommunityData={onSubmitCommunityData} communityData={communityData}/>}
    {activeTab==2 && !confirmed && <Button onClick={onConfirm}></Button>}
    
    {confirmed && loaded && <div>Share</div>}

    </div>
  </>)
}

export default Start;
