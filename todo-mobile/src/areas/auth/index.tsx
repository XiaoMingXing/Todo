import React from 'react'
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from 'native-base'
import LoginForm from "../../components/LoginForm";


interface Props {
    navigation: { navigate: (scene: String) => void }
}

class AuthPage extends React.Component<Props> {

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
                    <Title>Authentication</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <LoginForm/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default AuthPage
