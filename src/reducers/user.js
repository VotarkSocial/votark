import * as types from '../types/user'

import { combineReducers } from 'redux';

const followUser = (state = false, action) => {
    switch(action.type) {
      case types.USER_IS_FOLLOWING_FETCH_COMPLETED: {
        return action.payload;
      }
      case types.USER_FOLLOW_STARTED:{
        return true
      }
      case types.USER_FOLLOW_FAILED:{
        return false
      }
      case types.USER_UNFOLLOW_STARTED:{
          return false
      }
      case types.USER_UNFOLLOW_FAILED:{
          return true
      }
      default: {
        return state;
      }
    }
  };

  const followExtraUser = (state = false, action) => {
    switch(action.type) {
      case types.EXTRA_USER_IS_FOLLOWING_FETCH_COMPLETED: {
        return action.payload;
      }
      case types.EXTRA_USER_FOLLOW_STARTED:{
        return true
      }
      case types.EXTRA_USER_FOLLOW_FAILED:{
        return false
      }
      case types.EXTRA_USER_UNFOLLOW_STARTED:{
          return false
      }
      case types.EXTRA_USER_UNFOLLOW_FAILED:{
          return true
      }
      default: {
        return state;
      }
    }
  };

  const user = (state={},action)=>{
      switch (action.type) {
          case types.USER_SETTED:
              return action.payload
          default:
              return state
      }
  }


  const extra_user = (state={},action)=>{
    switch (action.type) {
        case types.EXTRA_USER_SETTED:
            return action.payload
        default:
            return state
    }
}

  const isFetching = (state=false,action)=>{
      switch (action.type) {
            case types.USER_FOLLOW_STARTED:
                return true
            case types.USER_UNFOLLOW_STARTED:
                return true
            case types.EXTRA_USER_FOLLOW_STARTED:
                return true
            case types.EXTRA_USER_UNFOLLOW_STARTED:
                return true
            case types.USER_IS_FOLLOWING_FETCH_STARTED:
                return true
            case types.EXTRA_USER_IS_FOLLOWING_FETCH_STARTED:
                return true
            case types.USER_FOLLOW_FAILED:
                return false
            case types.USER_UNFOLLOW_FAILED:
                return false
            case types.EXTRA_USER_FOLLOW_FAILED:
                return false
            case types.EXTRA_USER_UNFOLLOW_FAILED:
                return false
            case types.USER_IS_FOLLOWING_FETCH_FAILED:
                return false
            case types.EXTRA_USER_IS_FOLLOWING_FETCH_FAILED:
                return false
            case types.USER_FOLLOW_COMPLETED:
                return false
            case types.USER_UNFOLLOW_COMPLETED:
                return false
            case types.EXTRA_USER_FOLLOW_COMPLETED:
                return false
            case types.EXTRA_USER_UNFOLLOW_COMPLETED:
                return false
            case types.EXTRA_USER_IS_FOLLOWING_FETCH_COMPLETED:
                return false
            case types.USER_IS_FOLLOWING_FETCH_COMPLETED:
                return false
            default:
              return state;
      }
  }


  const error = (state=null,action)=>{
    switch (action.type) {
        case types.USER_FOLLOW_STARTED:
            return null
        case types.USER_UNFOLLOW_STARTED:
            return null
        case types.EXTRA_USER_FOLLOW_STARTED:
            return null
        case types.EXTRA_USER_UNFOLLOW_STARTED:
            return null
        case types.USER_IS_FOLLOWING_FETCH_STARTED:
            return null
        case types.EXTRA_USER_IS_FOLLOWING_FETCH_STARTED:
            return null
        case types.USER_FOLLOW_FAILED:
            return action.payload.error
        case types.USER_UNFOLLOW_FAILED:
            return action.payload.error
        case types.EXTRA_USER_FOLLOW_FAILED:
            return action.payload.error
        case types.EXTRA_USER_UNFOLLOW_FAILED:
            return action.payload.error
        case types.USER_IS_FOLLOWING_FETCH_FAILED:
            return action.payload.error
        case types.EXTRA_USER_IS_FOLLOWING_FETCH_FAILED:
            return action.payload.error
        case types.USER_FOLLOW_COMPLETED:
            return null
        case types.USER_UNFOLLOW_COMPLETED:
            return null
        case types.EXTRA_USER_FOLLOW_COMPLETED:
            return null
        case types.EXTRA_USER_UNFOLLOW_COMPLETED:
            return null
        case types.EXTRA_USER_IS_FOLLOWING_FETCH_COMPLETED:
            return null
        case types.USER_IS_FOLLOWING_FETCH_COMPLETED:
            return null
        default:
          return state;
    }
}


export default combineReducers({
    followUser,
    followExtraUser,
    user,
    extra_user,
    isFetching,
    error,
  });
  
  export const getUser = (state) => state.user;
  export const getExtraUser = state => state.extra_user;
  export const getIsFollowingUser = (state) => state.followUser;
  export const getIsFollowingExtraUser = state => state.followExtraUser;
  export const getisFetching = state => state.isFetching;
  export const getError = state => state.error;