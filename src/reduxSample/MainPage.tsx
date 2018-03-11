import React, {Component} from 'react'
import {Button, View} from 'react-native'
import {COLORS} from './Colors'
import {connect} from 'react-redux'

interface Props {
    navigation: {
        goBack: () => void,
        navigate: (screen: string, params?: object) => void
    }
    colorName: string
}

class MainPage extends Component<Props> {

    onChooseColor() {
        this.props.navigation.navigate('ChooseColor')
    }

    selectedColor() {
        const {colorName} = this.props
        return COLORS[colorName].hexCode
    }

    render() {
        const color = this.selectedColor()
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: color}}>
                <Button
                    onPress={this.onChooseColor.bind(this)}
                    color='#FFF'
                    title='Choose Photo'/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {colorName: state.color.colorName}
}

export default connect(mapStateToProps)(MainPage)