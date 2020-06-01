import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/post';


const image = (state = null, action) => {
  switch(action.type) {
    case types.PICTURE_SETTED:
      return action.payload;
    default: 
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.POST_ADDED_STARTED: {
      return true;
    }
    case types.POST_ADDED_COMPLETED: {
      return false;
    }
    case types.POST_ADDED_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.POST_ADDED_FAILED: {
      return action.payload.error;
    }
    case types.POST_ADDED_STARTED: {
      return null;
    }
    case types.POST_ADDED_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  image,
  isFetching,
  error,
});

export const getImage = state => state.image;
export const getAddingPostError = state => state.error;
export const getIsAddingPost = state => state.isFetching;
