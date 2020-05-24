import * as types from '../types/reactions'

import { combineReducers } from 'redux';

const liked = (state = false, action) => {
    switch(action.type) {
      case types.VERSUS_LIKE_FAILED: {
        return false;
      }
      case types.VERSUS_LIKE_STARTED: {
        return true
      }
      case types.VERSUS_UNLIKE_FAILED:{
        return true
      }
      case types.VERSUS_UNLIKE_STARTED:{
        return false;
      }
      case types.NULL_SETTED:{
          return false
      }
      case types.VERSUS_LIKE_FETCH_COMPLETED:{
          return action.payload.result
      }
      default: {
        return state;
      }
    }
  };


const hearted = (state = false, action) => {
    switch(action.type) {
      case types.VERSUS_HEART_FAILED: {
        return false;
      }
      case types.VERSUS_HEART_STARTED: {
        return true;
      }
      case types.VERSUS_UNHEART_FAILED:{
        return true;
      }
      case types.VERSUS_UNHEART_STARTED:{
        return false;
      }
      case types.NULL_SETTED:{
          return false
      }
     case types.VERSUS_HEART_FETCH_COMPLETED:{
        return action.payload.result
     }
      default: {
        return state;
      }
    }
  };

  const like = (state={},action)=>{
    switch (action.type) {
        case types.VERSUS_LIKE_FETCH_COMPLETED:
            return action.payload
        case types.VERSUS_LIKE_COMPLETED:
            return action.payload
        case types.VERSUS_UNLIKE_COMPLETED:
            return {}
        case types.NULL_SETTED:
            return {}
        default:
            return state
    }
  }

  const heart = (state={},action)=>{
    switch (action.type) {
        case types.VERSUS_HEART_FETCH_COMPLETED:
            return action.payload
        case types.VERSUS_HEART_COMPLETED:
            return action.payload
        case types.VERSUS_UNHEART_COMPLETED:
            return {}
        case types.NULL_SETTED:
            return {}
        default:
            return state
    }
  }

  const isFetching = (state=false,action)=>{
      switch (action.type) {
            case types.VERSUS_LIKE_STARTED:
                return true
            case types.VERSUS_UNLIKE_STARTED:
                return true
            case types.VERSUS_HEART_STARTED:
                return true
            case types.VERSUS_UNHEART_STARTED:
                return true
            case types.VERSUS_LIKE_FETCH_STARTED:
                return true
            case types.VERSUS_HEART_FETCH_STARTED:
                return true
            case types.VERSUS_LIKE_FAILED:
                return false
            case types.VERSUS_UNLIKE_FAILED:
                return false
            case types.VERSUS_HEART_FAILED:
                return false
            case types.VERSUS_UNHEART_FAILED:
                return false
            case types.VERSUS_LIKE_FETCH_FAILED:
                return false
            case types.VERSUS_HEART_FETCH_FAILED:
                return false
            case types.VERSUS_LIKE_COMPLETED:
                return false
            case types.VERSUS_UNLIKE_COMPLETED:
                return false
            case types.VERSUS_HEART_COMPLETED:
                return false
            case types.VERSUS_UNHEART_COMPLETED:
                return false
            case types.VERSUS_LIKE_FETCH_COMPLETED:
                return false
            case types.VERSUS_HEART_FETCH_COMPLETED:
                return false
            default:
              return state;
      }
  }


  const error = (state=null,action)=>{
    switch (action.type) {
          case types.VERSUS_LIKE_STARTED:
              return null
          case types.VERSUS_UNLIKE_STARTED:
              return null
          case types.VERSUS_HEART_STARTED:
              return null
          case types.VERSUS_UNHEART_STARTED:
              return null
          case types.VERSUS_LIKE_FETCH_STARTED:
              return null
          case types.VERSUS_HEART_FETCH_STARTED:
              return null
          case types.VERSUS_LIKE_FAILED:
              return action.payload.error
          case types.VERSUS_UNLIKE_FAILED:
              return action.payload.error
          case types.VERSUS_HEART_FAILED:
              return action.payload.error
          case types.VERSUS_UNHEART_FAILED:
              return action.payload.error
          case types.VERSUS_LIKE_FETCH_FAILED:
              return action.payload.error
          case types.VERSUS_HEART_FETCH_FAILED:
              return action.payload.error
          case types.VERSUS_LIKE_COMPLETED:
              return null
          case types.VERSUS_UNLIKE_COMPLETED:
              return null
          case types.VERSUS_HEART_COMPLETED:
              return null
          case types.VERSUS_UNHEART_COMPLETED:
              return null
          case types.VERSUS_LIKE_FETCH_COMPLETED:
              return null
          case types.VERSUS_HEART_FETCH_COMPLETED:
              return null
          default:
            return state;
    }
}


export default combineReducers({
    like,
    liked,
    heart,
    hearted,
    isFetching,
    error,
  });
  
  export const getLike = (state) => state.like;
  export const getisLiked = state => state.liked;
  export const getHeart = (state) => state.heart;
  export const getisHearted = state => state.hearted;
  export const getisFetching = state => state.isFetching;
  export const getError = state => state.error;
  