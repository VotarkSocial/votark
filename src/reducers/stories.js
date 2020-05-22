import * as types from '../types/stories'
import { combineReducers } from 'redux';

const hidden = (state=false,action)=>{
    switch (action.type) {
        case types.STORIES_SHOWED:
            return false
        case types.STORIES_HIDDEN:
                return true
        default:
            return state
    }
}

export default combineReducers({
    hidden
  });
  
  export const getHidden = (state) => state.hidden;