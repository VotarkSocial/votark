import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/posts';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.POST_FETCH_COMPLETED: {
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

const order = (state = [], action) => {
  switch(action.type) {
    case types.POST_FETCH_COMPLETED: {
      return action.payload.order;
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.POST_FETCH_STARTED: {
      return true;
    }
    case types.POST_FETCH_COMPLETED: {
      return false;
    }
    case types.POST_FETCH_FAILEED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.POST_FETCH_FAILEED: {
      return action.payload.error;
    }
    case types.POST_FETCH_STARTED: {
      return null;
    }
    case types.POST_FETCH_COMPLETED: {
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

export const getPost = (state, id) => state.byId[id];
export const getPosts = state => state.order.map(id => getPost(state, id));
export const isFetchingPost = state => state.isFetching;
export const getFetchingErrorPost = state => state.error;