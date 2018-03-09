import React from 'react'
import {Container, Header, Card, CardItem, Title, Left, Icon, Right, Button, Body, Content} from 'native-base'
import LoginForm from '../../components/LoginForm'

interface Props {
    navigation: { navigate: (scene: String) => void }
}

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
                            <LoginForm/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default HomeScreen
