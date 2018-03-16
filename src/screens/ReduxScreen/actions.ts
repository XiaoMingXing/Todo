import {Action, ActionCreator} from 'redux'
import Data from './data'
import cuid from "cuid"

export const DATA_AVAILABLE = 'DATA_AVAILABLE';

export const getData: ActionCreator<Action> = () => {
    const data = Data.instructions;
    return {
        type: DATA_AVAILABLE,
        data: data
    }
}

export const ADD_CHAT = "ADD_CHAT";

export const addChat: ActionCreator<Action> =
    ({
         id = cuid(),
         msg = '',
         user = 'Anonymous',
         timeStamp = Date.now()
     } = {}) => ({
        type: ADD_CHAT,
        payload: {id, msg, user, timeStamp}
    });