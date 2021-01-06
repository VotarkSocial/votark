import * as types from '../types/currentPost'

import { combineReducers } from 'redux';

const currentPost = (state = {}, action) => {
    switch(action.type) {
      case types.CURRENT_POST_FETCH_COMPLETED: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };


const currentPostFetching = (state = false, action) => {
    switch(action.type) {
      case types.CURRENT_POST_FETCH_COMPLETED: {
        return false;
      }
      case types.CURRENT_POST_FETCH_STARTED: {
        return true;
      }
      case types.CURRENT_POST_FETCH_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };


const currentPostError = (state = '', action) => {
    switch(action.type) {
      case types.CURRENT_POST_FETCH_COMPLETED: {
        return '';
      }
      case types.CURRENT_POST_FETCH_STARTED: {
        return '';
      }
      case types.CURRENT_POST_FETCH_FAILED: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };


const currentPostSelected = (state = null, action) => {
    switch(action.type) {
      case types.CURRENT_POST_SELECTEDD: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };



export default combineReducers({
    currentPost,
    currentPostError,
    currentPostFetching,
    currentPostSelected
  });
  
  export const getCurrentPost = (state) => state.currentPost;
  export const getCurrentPostError = (state) => state.currentPostError;0
  export const getCurrentPostFetching = (state) => state.currentPostFetching;
  export const getCurrentPostSelected = (state) => state.currentPostSelected;

  