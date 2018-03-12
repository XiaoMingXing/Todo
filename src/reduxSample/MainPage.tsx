import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {COLORS} from './Colors'
import {connect} from 'react-redux'
import {Button, Icon, Text} from 'native-base'
import CustomizeHeader from '../components/CustomizeHeader'

interface Props {
    navigation: {
        goBack: () => void,
        navigate: (screen: string, params?: object) => void
    }
    colorName: string,
    size: number,
    images: Array<any>
}

class MainPage extends Component<Props> {

    onChooseColor() {
        this.props.navigation.navigate('ChooseColor')
    }

    selectedColor() {
        const {colorName} = this.props
        return COLORS[colorName].hexCode
    }

    selectedSize() {
        const {size} = this.props
        return size
    }

    selectedImages() {
        const {images} = this.props
        return images
    }

    render() {
        const color = this.selectedColor()
        const size = this.selectedSize()
        console.log('SIZE: ', size)
        const images = this.selectedImages()
        console.log('IMAGES: ', images)

        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: color}}>
                <CustomizeHeader navigation={this.props.navigation}/>
                <Button light
                        style={styles.button}
                        onPress={this.onChooseColor.bind(this)}
                        color='#FFF'>
                    <Text>Choose Background Color</Text>
                </Button>

                <Button iconRight info light
                        color='#FFF'
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('CustomizeScreen')}>
                    <Text> Customize Choose photo </Text>
                    <Icon name='arrow-forward'/>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => {
    debugger
    return {
        colorName: state.color.colorName,
        size: state.color.size,
        images: state.photo.images
    }
}

export default connect(mapStateToProps)(MainPage)

const styles = StyleSheet.create({
    button: {
        margin: 5
    }
})