import * as React from 'react'
import {Body, Icon, Input, Item} from 'native-base'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import {connect} from 'react-redux';
import {formUpdated} from "../actions";

interface Props {
    isReady?: false
    name: String,
    validates: Array<any>,
    placeHolder?: string,
    securityEntry?: boolean,
    bind?: Function,
    formUpdated?: Function
}

interface State {
    value?: string,
    isValid?: boolean,
    isDirty?: boolean,
    currentErrorMsg?: string
}

class AbstractField extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            isValid: true,
            isDirty: false,
            currentErrorMsg: ''
        }
    }

    validate = (): any => {
        let isValid: boolean = false
        for (let validate of this.props.validates) {
            if (!validate.validate(this.state.value)) {
                return validate
            }
        }
        return isValid
    }

    triggerValidate = (): void => {
        let errorValidator = this.validate()
        if (errorValidator) {
            this.setState({
                isDirty: true,
                isValid: false,
                currentErrorMsg: errorValidator.getMessage()
            })
        } else {
            this.setState({
                isDirty: true,
                isValid: true,
                currentErrorMsg: ''
            })
        }
    }

    getCurrentStatus = (): any => {
        if (this.state.isDirty) {
            return this.state.isValid ? {'success': true} : {'error': true}
        }
    }

    getCurrentIcon = (): any => {
        if (this.state.isDirty) {
            return this.state.isValid ? 'checkmark-circle' : 'close-circle'
        }
    }

}

class Field extends AbstractField {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onBlur() {
        this.triggerValidate();
        let params = {};
        params[this.props.name.toString()] = this.state.value;
        this.props.formUpdated(params)
    }

    render() {
        return (
            <Body>
            <Item {...this.getCurrentStatus()}>
                <Input placeholder={this.props.placeHolder}
                       value={this.state.value}
                       onChangeText={(value) => this.setState({value})}
                       onBlur={this.onBlur.bind(this)}
                       autoCapitalize='none'
                       secureTextEntry={this.props.securityEntry}
                       autoCorrect={false}/>
                {<Icon name={this.getCurrentIcon()}/>}
            </Item>
            <View style={styles.container}>
                {<Text
                    style={this.state.isValid ? styles.message : styles.errorText}>{this.state.currentErrorMsg}</Text>}
            </View>
            </Body>
        )
    }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {formUpdated})(Field)

const styles = StyleSheet.create({
    successText: {
        color: 'green'
    },
    errorText: {
        color: 'red',
        ...this.message
    },
    message: {
        textAlign: 'left'
    },
    container: {
        flex: 1,
        width: Dimensions.get('screen').width * 0.8
    }
})