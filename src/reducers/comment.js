import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/comment';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.COMMENTS_FETCHING_COMPLETED: {
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
    case types.COMMENT_ADDITION_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.COMMENT_ADDITION_COMPLETED: {
      const { oldId, Comment } = action.payload;
      const newState = omit(state, oldId);
      newState[Comment.id] = {
        ...Comment,
        isConfirmed: true,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.COMMENTS_FETCHING_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.COMMENT_ADDITION_STARTED: {
      return [...state, action.payload.id];
    }
    case types.COMMENT_ADDITION_COMPLETED: {
      const { oldId, petOwner } = action.payload;
      return state.map(id => id === oldId ? petOwner.id : id);
    }
    case types.NULL_SETTED:{
        return []
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.COMMENTS_FETCHING_STARTED: {
      return true;
    }
    case types.COMMENTS_FETCHING_COMPLETED: {
      return false;
    }
    case types.COMMENTS_FETCHING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.COMMENTS_FETCHING_FAILED: {
      return action.payload.error;
    }
    case types.COMMENTS_FETCHING_STARTED: {
      return null;
    }
    case types.COMMENTS_FETCHING_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};


export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getComment = (state, id) => state.byId[id];
export const getComments = state => state.order.map(id => getComment(state, id));
export const getisFetching = state => state.isFetching;
export const getError = state => state.error;
