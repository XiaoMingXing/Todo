import React from 'react'
import {NavigationActions} from 'react-navigation'
import {
    Button, Text, Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label
} from 'native-base'

interface Props {
    navigation: {
        navigate: (scene: String) => void,
        dispatch: (action: any) => void
    }
}

export default class JadeChat extends React.Component<Props> {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Nine Chat</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Item floatingLabel style={{marginTop: 20}}>
                        <Label>Nine Chat</Label>
                        <Input/>
                    </Item>
                    <Button
                        rounded
                        success
                        style={{marginTop: 20, alignSelf: 'center'}}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: 'ProfileScreen', // <==== this is Profile tabNavigator
                                action: NavigationActions.navigate({
                                    routeName: 'Profile', // <===== this is defaultScreen for Porfile
                                    params: {name: 'JADE'}
                                })
                            })
                            this.props.navigation.dispatch(navigationAction)
                        }}
                    >
                        <Text>Goto Nine Profile</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}