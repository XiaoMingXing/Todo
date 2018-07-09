import React from 'react'
import {addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'
import {addListener} from './config/utils'
import AppRoutes from './config/Routes'

const AppWithState = ({dispatch, nav}) => (
    <AppRoutes navigation={addNavigationHelpers({
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