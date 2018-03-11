import React, {Component} from 'react'
import {Button, View} from 'react-native'
import {COLORS} from './Colors'
import {colorChanged} from './ColorChangedAction'
import {connect} from 'react-redux'

interface Props {
    navigation: {
        goBack: () => void,
        navigate: (screen: string, params: object) => void
    },
    colorChanged: Function
}

class ChooseColorPage extends Component<Props> {

    onSelectColor(colorName) {
        this.props.colorChanged({colorName})
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
                        onPress={() => this.onSelectColor(key)}
                    />
                ))}
            </View>
        )
    }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {colorChanged})(ChooseColorPage)