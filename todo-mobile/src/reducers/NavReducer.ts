import AppRoutes from '../config/Routes'

const router = AppRoutes.router
const mainNavAction = router.getActionForPathAndParams('Home')
const initialNavState = router.getStateForAction(mainNavAction)

const NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state)
}

export default NavReducer