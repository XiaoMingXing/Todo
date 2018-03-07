import React from 'react'
import {Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem} from 'native-base'
import LoginForm from '../../components/LoginForm'
import allReducers from '../../reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

interface Props {
    navigation: { navigate: (scene: String) => void }
}

const store = createStore(allReducers)

class HomeScreen extends React.Component<Props> {
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
                    <Title>HomeScreen</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Provider store={store}>
                                <LoginForm/>
                            </Provider>

                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark
                            style={{marginTop: 10}}
                            onPress={() => this.props.navigation.navigate('Chat')}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button full rounded primary
                            style={{marginTop: 10}}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                        <Text>Goto Profiles</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen
