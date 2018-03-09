import React from 'react'
import {Body, Button, Text} from 'native-base'
import {StyleSheet} from 'react-native'
import Field from './Field'
import {NotEmptyValidator, EmailValidator, PasswordValidator} from '../validate/Validators'

export default class LoginForm extends React.Component {
    private MESSAGES = {
        emailNotEmpty: 'The email format should not empty!',
        emailValid: 'The email format is invalid',
        passwordNotEmpty: 'Password should not empty!',
        passwordValid: 'Password should contains Uppercase, Lowercase and number!'
    }

    constructor(props) {
        super(props)
    }

    onPress = () => {
        fetch('https://localhost:3000/v1/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props)
        })
    }

    render() {
        const emailNotEmpty = this.MESSAGES.emailNotEmpty
        const emailValid = this.MESSAGES.emailValid
        const validators: any = [
            new NotEmptyValidator(emailNotEmpty),
            new EmailValidator(emailValid)]
        const passwordValidators: any = [
            new NotEmptyValidator(this.MESSAGES.passwordNotEmpty),
            new PasswordValidator(this.MESSAGES.passwordValid)]

        return (
            <Body>
            <Field name='email' placeHolder='Email' validates={validators}/>
            <Field name='password' placeHolder='Password' validates={passwordValidators} securityEntry={true}/>
            <Button full style={styles.button} onPress={this.onPress}>
                <Text>Login</Text>
            </Button>
            </Body>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10
    }
})