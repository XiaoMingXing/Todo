import React from 'react'
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from 'native-base'
import store from "../ReduxScreen/store";
import {applyMiddleware, createStore} from "redux";
import {middleware} from "../../config/utils";
import {Provider} from 'react-redux'
import FormReducer from "./FormReducer";
import LoginFormTemp from "../../components/LoginFormTemp";


interface Props {
    navigation: { navigate: (scene: String) => void }
}

class HomeScreen extends React.Component<Props> {

    store = createStore(
        FormReducer,
        applyMiddleware(middleware)
    )

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
                            <Provider store={store}>
                                <LoginFormTemp/>
                            </Provider>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen
