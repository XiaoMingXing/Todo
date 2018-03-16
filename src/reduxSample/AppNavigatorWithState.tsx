import React from 'react'
import {addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import AppNavigator from './nav/Navigators'
import {addListener} from '../config/utils'

const AppWithState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
        addListener
    })}/>
)

const mapStateToProps = state => ({
    nav: state.nav
})

let AppWithNavigationState = connect(mapStateToProps)(AppWithState)

export default AppWithNavigationState