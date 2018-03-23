import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'

interface Props {
    formData?: any,
    fieldChange: Function
}

class Form extends Component<Props> {

    constructor(props) {
        super(props);
    }

    callback = (key, value) => {
        let formData = this.props.formData;
        formData[key] = value;
        this.setState({formData});
    };

    componentDidMount() {
        console.log("LOCAL STORAGE FORM: ", this.props.formData)
    }

    componentDidUpdate() {
        let {formData} = this.props;
        this.props.fieldChange(formData)
    }

    render() {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    formData: state.form.formData
});
export default connect(mapStateToProps)(Form)

