import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    headerNext: {
        color: '#007aff'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        fontSize: 20
    },
    rectangle: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        margin: 5,
        backgroundColor: 'powderblue',
        flex: 1
    },
    textCenter: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18
    },
    listItem: {
        fontWeight: 'bold',
        fontSize: 18
    }

})

export default styles