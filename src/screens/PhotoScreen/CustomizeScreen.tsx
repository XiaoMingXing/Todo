import React from 'react'
import {
    CameraRoll,
    GetPhotosParamType,
    Image,
    NativeModules,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native'
import {Body, Container, Content, Header, Icon, Left, Right, Title} from 'native-base'
import {connect} from 'react-redux'
import {photoSelected} from '../../reduxSample/ColorChangedAction'

interface State {
    images: Array<any>
}

interface Props {
    navigation: { goBack: () => void },
    photoSelected: Function
}

class CustomizeScreen extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    selectImage = (uri: string) => {
        if (!uri) {
            return
        }

        let selectedImages = this.state.images
        selectedImages.forEach((image) => {
            if (image.uri === uri) {
                image.selected = !image.selected
            }
        })
        this.setState({images: selectedImages})
    }

    saveImages1 = () => {
        let imagesNeedToSave = []
        let selectedImages = this.getSelectedImages()
        if (!selectedImages.length) {
            return
        }
        selectedImages.forEach((currentImage) => {
            NativeModules.ReadImageData.readImage(currentImage.uri, (image) => {
                imagesNeedToSave.push(image)
            })
        })

        // This will not work correctly, because of readImage is async call
        this.storeImages(imagesNeedToSave)
    }

    saveImages = () => {
        const imageUris = this.getSelectedImages().map((image) => image.uri)
        this.props.photoSelected(imageUris)
        this.props.navigation.goBack()
    }

    storeImages = (images: Array<any>) => {
        console.log('Images: ', images.length)
        fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({imageDatas: images})
        })
    }

    componentDidMount() {
        const fetchParams: GetPhotosParamType = {
            first: 20,
            assetType: 'All',
            groupTypes: 'All'
        }
        CameraRoll
            .getPhotos(fetchParams)
            .then(r => {
                const assets = r.edges
                const images = assets
                    .map((asset) => asset.node.image)
                    .map((image) => {
                        return {
                            uri: image.uri,
                            image: image,
                            selected: false
                        }
                    })

                this.setState({images: images})
            })
            .catch(console.log)
    }

    getSelectedImages = () => {
        let selected = []
        this.state.images.forEach((image) => {
            if (image.selected) {
                selected.push(image)
            }
        })
        return selected
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                            <Text style={styles.headerNext}>Back</Text>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title>PhotoScreen</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={this.saveImages.bind(this)}>
                            <Text style={styles.headerNext}>Confirm</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <ScrollView style={styles.container}>
                        <View>
                            <Text>Total number of images: {this.state.images.length}</Text>
                            <Text>Selected images: {this.getSelectedImages().length}</Text>
                        </View>
                        <View style={styles.imageGrid}>
                            {
                                this.state.images.map((image) => {
                                    return (
                                        <View key={image.uri}>
                                            <TouchableHighlight
                                                onPress={this.selectImage.bind(this, image.uri)}>
                                                <Image style={styles.image} source={{uri: image.uri}}/>
                                            </TouchableHighlight>
                                            {image.selected ? <Icon style={styles.check} name='navigate'/> : ''}
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    },
    headerNext: {
        color: '#007aff'
    },
    check: {
        marginLeft: 85,
        marginTop: -40,
        color: '#007aff'
    }
})

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {photoSelected})(CustomizeScreen)