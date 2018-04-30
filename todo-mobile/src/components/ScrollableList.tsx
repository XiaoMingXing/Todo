import React, {PureComponent} from 'react'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import styles from "../styles/header";

interface Item {
    id: string;
    title: string;
}

interface ItemProps extends Item {
    selected: boolean,
    onPressItem: Function
}

class ListItem extends React.PureComponent<ItemProps> {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.rectangle}>
                    <Text style={[{color: textColor}, styles.listItem]}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


interface Props {
    data: any[]
}

export default class ScrollableList extends PureComponent<Props, any> {

    state = {selected: {"2": true}};

    constructor(props) {
        super(props);
    }


    _onPressItem = (id: string) => {
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map();
            selected.set(id, !state.selected[id]); // toggle
            return {selected};
        });
    };

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => {
        return <ListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected[item.id]}
            title={item.title}
        />
    };


    render() {
        const {data} = this.props;
        return (
            <FlatList
                data={data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />)
    }
}

