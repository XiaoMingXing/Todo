import React from 'react'
import {Container, Header, Title, Left, Icon, Right, Button, Body, Text} from 'native-base'
import {TouchableOpacity, StyleSheet, PixelRatio, Image, View} from 'react-native'
import ImagePicker from 'react-native-image-picker'

interface Props {
    navigation: { navigate: (scene: String) => void }
}

interface State {
    ImageSource?: any
}

class ImagePickerScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            ImageSource: undefined
        }
    }

    _onPressButton = () => {
        console.log('Save')
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled photo picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                let source = {uri: response.uri}

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    ImageSource: source
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>PhotoScreen</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <Text style={styles.headerNext}>Save</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titleText}>Third party library version: react-native-image-picker </Text>
                    </View>
                    <View>
                        <Button iconRight info style={styles.button} primary onPress={() => this.props.navigation.navigate('CustomizeScreen')}>
                            <Text> Customize Choose photo </Text>
                            <Icon name='arrow-forward'/>
                        </Button>
                        <Button style={styles.button} primary onPress={this.selectPhotoTapped.bind(this)}>
                            <Text> Choose photo </Text>
                        </Button>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image style={styles.Image} source={this.state.ImageSource}/>
                        <Image style={styles.Image} source={this.state.ImageSource}/>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    ImageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    Image: {
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
        width: 100,
        height: 100,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        backgroundColor: 'transparent'

    },
    button: {
        margin: 5
    },
    headerNext: {
        color: '#007aff'
    },
    titleText: {
        fontSize: 14,
        alignItems: 'center'
    },
    link: {
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#007aff'
    }

})

export default ImagePickerScreen
