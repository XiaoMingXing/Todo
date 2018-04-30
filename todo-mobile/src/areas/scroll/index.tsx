import React from 'react'
import {View} from "react-native";
import CustomizeHeader from "../../components/CustomizeHeader";
import ScrollableList from "../../components/ScrollableList";


interface Props {
    navigation: {
        navigate: (scene: String) => void,
        goBack: () => void
    }
}

class ScrollablePage extends React.Component<Props> {

    render() {
        const data = [{id: "1", title: 'One'}, {id: "2", title: 'Two'}];
        return (
            <View style={{flex: 1}}>
                <CustomizeHeader navigation={this.props.navigation}/>
                <View>
                    <ScrollableList data={data}/>
                </View>
            </View>
        )
    }
}

export default ScrollablePage
