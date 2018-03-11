import React from 'react'
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getData as Actions} from './actions'

interface Props {
    loading: boolean,
    data: any,
    navigation: { goBack: () => void, navigate: (screen: string) => void }
}

class App extends React.Component<Props> {
    constructor(props) {
        super(props)

        this.state = {}

        this.renderItem = this.renderItem.bind(this)
    }

    renderItem = (item) => {
        return (<View style={styles.row}>
            <Text style={styles.title}>
                {(Number.parseInt(item.key) + 1)}{'. '}{item.title}
            </Text>
            <Text style={styles.description}>
                {item.description}
            </Text>
        </View>)
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
                        <FlatList
                            ref='listRef'
                            data={this.props.data}
                            extraData={this.state}
                            keyExtractor={(item, index) => item.id + index.toString()}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: '600'
    },

    description: {
        marginTop: 5,
        fontSize: 14
    }
})

function mapStateToProps(state) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)