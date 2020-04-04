import React, {useState} from 'react'
// import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'
const possibleDoors = ['--','1a','2a','3a','4a'].map((i)=>({ key: i, text: i, value: i=='--'?null:i }))
const possibleStairs = ['--','A','B','C','D','E','F'].map((i)=>({ key: i, text: i, value: i=='--'?null:i }))
const possibleFloors = ['--','pral.','entl.', '1r', '2n', '3r', '4t', '5e', '6e', '7e', '8e', 'àt.', 's/àt'].map((i)=>({ key: i, text: i, value: i=='--'?null:i }))


const UserForm = (props) => {
    const [newUserData, changeNewUserData] = useState({...props.userData})
    
    return (
        <Form onSubmit={()=>props.changeUserData(newUserData)}>
            <Form.Field>
            <label>Benvingut{newUserData.name?' '+newUserData.name:null}!</label>
            <Form.Input placeholder='First Name' onChange={(e, {value})=>changeNewUserData({...newUserData,name:value})}/>
            </Form.Field>
            <Form.Group inline>
            <Form.Dropdown
                placeholder='Pis'
                fluid
                search
                selection
                options={possibleFloors}
                onChange={(e, {value})=>changeNewUserData({...newUserData, floor:value})}
            />
            <Form.Dropdown
                placeholder='Porta'
                fluid
                search
                selection
                options={possibleDoors}
                onChange={(e, {value})=>changeNewUserData({...newUserData, door:value})}
            />
            <Form.Dropdown
                placeholder='Escala'
                fluid
                search
                selection
                options={possibleStairs}
                onChange={(e, {value})=>changeNewUserData({...newUserData, stairs:value})}
            />
            </Form.Group>
            {<Form.Group inline>
                <label>VizName</label>
                <Form.Checkbox
                    checked={newUserData.visibleName}
                    onChange={(e, {value})=>changeNewUserData({...newUserData,visibleName:value})}
                />
                <label>VizPis</label>
                <Form.Checkbox
                    checked={newUserData.visibleFlat}
                    onChange={(e, {value})=>changeNewUserData({...newUserData, visibleFlat:value})}
                />
            </Form.Group>}
            
            <Form.Field>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        )
}
export default UserForm