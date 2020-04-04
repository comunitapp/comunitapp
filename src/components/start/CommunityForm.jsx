import React, {useState} from 'react'
// import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react'
import {
    Button,
    Header,
    Form
  } from 'semantic-ui-react'

const CommunityForm = (props) => {
    const [newCommunityData, changeNewCommunityData] = useState({...props.userData})
    
    return (
        <Form onSubmit={()=>props.changeCommunityData(newCommunityData)}>
            <Form.Field>
            <Form.Input placeholder='Community name' onChange={(e, {value})=>changeNewCommunityData({...newCommunityData,name:value})}/>
            </Form.Field>
            <Header>Localització aproximada</Header>
            <Form.Field>
            <div>Map</div>
            <Header>Localització aproximada</Header>
            </Form.Field>
            <Form.Field>
            <Header>Icona de la comunitat</Header>
            <div>Icon select</div>            
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        )
}
export default CommunityForm