import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/messages';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.MESSAGES_FETCHING_COMPLETED: {
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
    case types.MESSAGE_ADDITION_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.MESSAGE_ADDITION_COMPLETED: {
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
    case types.MESSAGES_FETCHING_COMPLETED: {
      return action.payload.order;
    }
    case types.MESSAGE_ADDITION_STARTED: {
      return [...state, action.payload.id];
    }
    case types.MESSAGE_ADDITION_COMPLETED: {
      const { oldId, comment } = action.payload;
      return state.map(id => id === oldId ? comment.id : id);
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
    case types.MESSAGES_FETCHING_STARTED: {
      return true;
    }
    case types.MESSAGES_FETCHING_COMPLETED: {
      return false;
    }
    case types.MESSAGES_FETCHING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.MESSAGES_FETCHING_FAILED: {
      return action.payload.error;
    }
    case types.MESSAGES_FETCHING_STARTED: {
      return null;
    }
    case types.MESSAGES_FETCHING_COMPLETED: {
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

export const getMessage = (state, id) => state.byId[id];
export const getMessages = state => state.order.map(id => getMessage(state, id));
export const getisFetchingMessage = state => state.isFetching;
export const getErrorMessage = state => state.error;