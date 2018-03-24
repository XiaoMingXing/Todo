import React from 'react'
import {Body, Button, Text} from 'native-base'
import Field from './Field'
import Form from "./Form";
import {EmailValidator, NotEmptyValidator, PasswordValidator} from "../validate/Validators";
import {connect} from "react-redux";
import {validateField} from "../actions";

interface Props {
    validateField?: Function
}

class LoginForm extends React.Component<Props> {
    private user: object;

    constructor(props) {
        super(props);
        this.user = {};
    }

    private MESSAGES = {
        emailNotEmpty: 'The email format should not empty!',
        emailValid: 'The email format is invalid',
        passwordNotEmpty: 'Password should not empty!',
        passwordValid: 'Password should contains Uppercase, Lowercase and number!'
    };

    onPress = () => {
        console.log("PRESS:  ", this.user);
        this.props.validateField(["email", "password"])
    };

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
            <Form fieldChange={(data) => {
                Object.assign(this.user, data)
            }}>
                <Field name='email' placeHolder='Email' validates={validators}/>
                <Field name='password' placeHolder='Password' validates={passwordValidators}
                       securityEntry={true}/>
                <Button full style={{marginTop: 10}} onPress={this.onPress.bind(this)}>
                    <Text>Login</Text>
                </Button>
            </Form>
            </Body>
        )
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {validateField})(LoginForm)


