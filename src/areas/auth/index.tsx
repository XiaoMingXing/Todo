import React from 'react'
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from 'native-base'
import LoginFormTemp from "../../components/LoginFormTemp";


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
                            <LoginFormTemp/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default AuthPage
