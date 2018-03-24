import React from 'react'
import {Body, Button, Text, View} from 'native-base'
import Field from './Field'
import {EmailValidator, NotEmptyValidator, PasswordValidator} from "../validate/Validators";
import {connect} from "react-redux";
import {validateField} from "../actions";

interface Props {
    formData?: object,
    validateField?: Function
}

class LoginForm extends React.Component<Props> {

    formData = {};

    constructor(props) {
        super(props);
    }

    private MESSAGES = {
        emailNotEmpty: 'The email format should not empty!',
        emailValid: 'The email format is invalid',
        passwordNotEmpty: 'Password should not empty!',
        passwordValid: 'Password should contains Uppercase, Lowercase and number!'
    };

    onPress = () => {
        console.log("formData:  ", this.props.formData);
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
            <View>
                <Field name='email' placeHolder='Email' validates={validators}/>
                <Field name='password' placeHolder='Password' validates={passwordValidators}
                       securityEntry={true}/>
                <Button full style={{marginTop: 10}} onPress={this.onPress.bind(this)}>
                    <Text>Login</Text>
                </Button>
            </View>
            </Body>
        )
    }
}

const mapStateToProps = (state) => ({
    formData: state.form.formData,
});

export default connect(mapStateToProps, {validateField})(LoginForm)


