import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {Header, Title, Left, Right, Body, Text, Button, Icon} from 'native-base'

interface Props {
    navigation: { goBack: () => void, navigate: (screen: string) => void }
}

export default class CustomizeHeader extends React.Component<Props> {

    save = () => {
        console.log('save')
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={this.save.bind(this)}>
                        <Text style={styles.headerNext}>Save</Text>
                    </TouchableOpacity>
                </Right>
            </Header>

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