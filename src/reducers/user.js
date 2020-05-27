import * as types from '../types/user'

import { combineReducers } from 'redux';

const followUser = (state = false, action) => {
    switch(action.type) {
      case types.USER_IS_FOLLOWING_FETCH_COMPLETED: {
        return action.payload;
      }
      case types.USER_FOLLOW_STARTED:{
        return !state
      }
      case types.USER_FOLLOW_FAILED:{
        return !state
      }
      case types.USER_UNFOLLOW_STARTED:{
          return !state
      }
      case types.USER_UNFOLLOW_FAILED:{
          return !state
      }
      case types.NULL_SETTED:{
          return false
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
        return !state
      }
      case types.EXTRA_USER_FOLLOW_FAILED:{
        return !state
      }
      case types.EXTRA_USER_UNFOLLOW_STARTED:{
          return !state
      }
      case types.EXTRA_USER_UNFOLLOW_FAILED:{
          return !state
      }
      case types.NULL_SETTED:{
          return false
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
            case types.UPDATE_COMPLETED:
                return action.payload
            case types.DELETE_COMPLETED:
                return {}
            case types.USER_COMPLETED:
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
            case types.USER_STARTED:
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
            case types.USER_COMPLETED:
                return false
            case types.USER_FAILED:
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
        case types.USER_FAILED:
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
        case types.USER_COMPLETED:
            return null
        case types.USER_STARTED:
            return null
        default:
          return state;
    }
}

const FollowersbyId = (state = {}, action) => {
    switch(action.type) {
      case types.FOLLOWERS_FETCH_COMPLETED: {
        const { entities, order } = action.payload;
        const newState = { ...state };
        order.forEach(id => {
          newState[id] = {
            ...entities[id],
            isConfirmed: true,
          };
        });
        return newState;
      }
      default: {
        return state;
      }
    }
  };
  
  const Followersorder = (state = [], action) => {
    switch(action.type) {
      case types.FOLLOWERS_FETCH_COMPLETED: {
        return state.length===0?action.payload.order:state;
      }
      default: {
        return state;
      }
    }
  };

  const FollowingbyId = (state = {}, action) => {
    switch(action.type) {
      case types.FOLLOWING_FETCH_COMPLETED: {
        const { entities, order } = action.payload;
        const newState = { ...state };
        order.forEach(id => {
          newState[id] = {
            ...entities[id],
            isConfirmed: true,
          };
        });
        return newState;
      }
      default: {
        return state;
      }
    }
  };
  
  const Followingorder = (state = [], action) => {
    switch(action.type) {
      case types.FOLLOWING_FETCH_COMPLETED: {
        return state.length===0?action.payload.order:state;
      }
      default: {
        return state;
      }
    }
  };
  
  const isFetchingFollowInfo = (state = false, action) => {
    switch(action.type) {
      case types.FOLLOWERS_FETCH_STARTED: {
        return true;
      }
      case types.FOLLOWERS_FETCH_COMPLETED: {
        return false;
      }
      case types.FOLLOWERS_FETCH_FAILED: {
        return false;
      }
      case types.FOLLOWING_FETCH_STARTED: {
        return true;
      }
      case types.FOLLOWING_FETCH_COMPLETED: {
        return false;
      }
      case types.FOLLOWING_FETCH_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };
  
  const error_FollowInfo = (state = null, action) => {
    switch(action.type) {
      case types.FOLLOWERS_FETCH_FAILED: {
        return action.payload.error;
      }
      case types.FOLLOWERS_FETCH_COMPLETED: {
        return null;
      }
      case types.FOLLOWERS_FETCH_STARTED: {
        return null;
      }
      case types.FOLLOWING_FETCH_FAILED: {
        return action.payload.error;
      }
      case types.FOLLOWING_FETCH_COMPLETED: {
        return null;
      }
      case types.FOLLOWING_FETCH_STARTED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };


  const StoriesbyId = (state = {}, action) => {
    switch(action.type) {
      case types.USER_STORIES_COMPLETED: {
        const { entities, order } = action.payload;
        const newState = { ...state };
        order.forEach(id => {
          newState[id] = {
            ...entities[id],
            isConfirmed: true,
          };
        });
        return newState;
      }
      default: {
        return state;
      }
    }
  };
  
  const Storiesorder = (state = [], action) => {
    switch(action.type) {
      case types.USER_STORIES_COMPLETED: {
        return action.payload.order;
      }
      default: {
        return state;
      }
    }
  };
  
  const isFetchingUserStories = (state = false, action) => {
    switch(action.type) {
      case types.USER_STORIES_STARTED: {
        return true;
      }
      case types.USER_STORIES_COMPLETED: {
        return false;
      }
      case types.USER_STORIES_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };
  
  const error_UserStories = (state = null, action) => {
    switch(action.type) {
      case types.USER_STORIES_FAILED: {
        return action.payload.error;
      }
      case types.USER_STORIES_COMPLETED: {
        return null;
      }
      case types.USER_STORIES_STARTED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };

  const isEditing = (state = false, action) => {
    switch(action.type) {
      case types.PROFILE_EDITED: {
        return true;
      }
      case types.UPDATE_COMPLETED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };

export default combineReducers({
    followUser,
    followExtraUser,
    user,
    extra_user,
    isFetching,
    error,
    FollowersbyId,
    Followersorder,
    FollowingbyId,
    Followingorder,
    isFetchingFollowInfo,
    isFetchingUserStories,
    error_FollowInfo,
    error_UserStories,
    StoriesbyId,
    Storiesorder,
    isEditing,
  });
  
  export const getUser = (state) => state.user;
  export const getExtraUser = state => state.extra_user;
  export const getIsFollowingUser = (state) => state.followUser;
  export const getIsFollowingExtraUser = state => state.followExtraUser;
  export const getisFetching = state => state.isFetching;
  export const getError = state => state.error;
  export const getFollowersCount = state => state.Followersorder.length;
  export const getFollowingCount = state => state.Followingorder.length;
  export const getisFetchingFollowInfo = state => state.isFetchingFollowInfo;
  export const getisFetchingUserStories = state => state.isFetchingUserStories;
  export const getUserStory = (state, id) => state.StoriesbyId[id];
  export const getUserStories = state => state.Storiesorder.map(id => getUserStory(state, id));
  export const getFollowingError = state => state.error_FollowInfo;
  export const getUserStorieserror = state => state.error_UserStories;
  export const getIsEditingUser = state => state.isEditing;