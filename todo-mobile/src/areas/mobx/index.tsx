import React from 'react'
import {View} from "react-native";
import TodoList from "./TodoList";
import observableListStore from "./ObservableListStore";


interface Props {
    navigation: {
        navigate: (scene: String) => void,
        goBack: () => void
    }
}

class MobXPage extends React.Component<Props> {

    render() {
        return (
            <View>
                <TodoList navigation={this.props.navigation} store={observableListStore}/>
            </View>
        )
    }
}

export default MobXPage
