import React from 'react'
import {Body, Button, Text} from 'native-base'
import {StyleSheet} from 'react-native'
import Field from './Field'
import Form from "./Form";
import {EmailValidator, NotEmptyValidator, PasswordValidator} from "../validate/Validators";

export default class LoginFormTemp extends Form {
    constructor(props) {
        super(props);
    }

    private MESSAGES = {
        emailNotEmpty: 'The email format should not empty!',
        emailValid: 'The email format is invalid',
        passwordNotEmpty: 'Password should not empty!',
        passwordValid: 'Password should contains Uppercase, Lowercase and number!'
    }

    onPress = () => {
        let {formData} = this.state;
        console.log(formData)
        // fetch('https://localhost:3000/v1/login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.props.formData)
        // })
    }


    render() {
        const emailNotEmpty = this.MESSAGES.emailNotEmpty;
        const emailValid = this.MESSAGES.emailValid;

        const validators: any = [
            new NotEmptyValidator(emailNotEmpty),
            new EmailValidator(emailValid)];
        const passwordValidators: any = [
            new NotEmptyValidator(this.MESSAGES.passwordNotEmpty),
            new PasswordValidator(this.MESSAGES.passwordValid)];

        return (
            <Body>
            <Field name='email' placeHolder='Email' validates={validators}
                   bind={this.callback.bind(this)}/>
            <Field name='password' placeHolder='Password' validates={passwordValidators}
                   bind={this.callback.bind(this)}
                   securityEntry={true}/>
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