import React, {Component} from 'react'
import {Button, View} from 'react-native'
import {COLORS} from './Colors'
import {colorChanged, sizeChanged} from '../actions'
import {connect} from 'react-redux'

interface Props {
    navigation: {
        goBack: () => void,
        navigate: (screen: string, params?: object) => void
    },
    colorChanged: Function,
    sizeChanged: Function
}

class ChooseColorPage extends Component<Props> {

    onSelectColor(colorName, size) {
        this.props.colorChanged({colorName})
        this.props.sizeChanged({size})
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View>
                {Object.keys(COLORS).map((key) => (
                    <Button
                        key={key}
                        title={COLORS[key].name}
                        color={COLORS[key].hexCode}
                        onPress={() => this.onSelectColor(key, 12)}
                    />
                ))}
            </View>
        )
    }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {colorChanged, sizeChanged})(ChooseColorPage)