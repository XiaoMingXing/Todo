import {Action, ActionCreator} from 'redux'
import Data from './data'

export const DATA_AVAILABLE = 'DATA_AVAILABLE'

export const getData: ActionCreator<Action> = () => {
    const data = Data.instructions
    return {
        type: DATA_AVAILABLE,
        data: data
    }
}