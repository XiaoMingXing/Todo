import React, {Component} from 'react'
import {Text, View} from 'react-native'

interface Props {
    bind?: any
}

interface State {
    formData: any
}

export default class Form extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    callback = (key, value) => {
        let formData = this.state.formData;
        formData[key] = value;
        this.setState({formData})
    };


    renderForm() {
        return (<Text>Sample Form</Text>)
    }

    render() {
        return (
            <View {...this.props}>
                {this.renderForm()}
            </View>
        )
    }

}

