import React from 'react'
import {Form, Item, Label, Input} from 'native-base'

export default class LoginForm extends React.Component {

    render() {
        return (
            <Form>
                <Item fixedLabel>
                    <Label>Username</Label>
                    <Input/>
                </Item>
                <Item fixedLabel last>
                    <Label>Password</Label>
                    <Input/>
                </Item>
            </Form>
        )
    }

}
