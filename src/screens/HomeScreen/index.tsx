import React from 'react'
import {Container, Header, Title, Item, Input, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem} from 'native-base'

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
                            <Body>
                            <Item success>
                                <Input placeholder='Textbox with Success Input'/>
                                <Icon name='checkmark-circle'/>
                            </Item>
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
