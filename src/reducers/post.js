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
    case types.USER_POSTS_COMPLETED: {
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

const fetchedOnce = (state=false,action) => {
    switch (action.type) {
        case types.USER_POSTS_STARTED:
            return true
        case types.POST_FETCH_STARTED:
            return true
        case types.POSTS_SETTED_TO_NULL:
            return false
        default:
            return state
    }
}

const order = (state = [], action) => {
  switch(action.type) {
    case types.POST_FETCH_COMPLETED: {
      return action.payload.order;
    }
    case types.USER_POSTS_COMPLETED: {
        return action.payload.order;
      }
    case types.POSTS_SETTED_TO_NULL:{
        return []
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
    case types.USER_POSTS_STARTED: {
        return true;
      }
      case types.USER_POSTS_COMPLETED: {
        return false;
      }
      case types.USER_POSTS_FAILED: {
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
    case types.USER_POSTS_FAILED: {
        return action.payload.error;
      }
      case types.USER_POSTS_STARTED: {
        return null;
      }
      case types.USER_POSTS_COMPLETED: {
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
  fetchedOnce,
});

export const getPost = (state, id) => state.byId[id];
export const getPosts = state => state.order.map(id => getPost(state, id));
export const isFetchingPost = state => state.isFetching;
export const getFetchedOnce = state => state.fetchedOnce;
export const getFetchingErrorPost = state => state.error;