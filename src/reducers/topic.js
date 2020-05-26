import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/topic';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.TOPIC_FETCH_COMPLETED: {
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
    case types.TOPIC_FETCH_COMPLETED: {
      return action.payload.order;
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.TOPIC_FETCH_STARTED: {
      return true;
    }
    case types.TOPIC_FETCH_COMPLETED: {
      return false;
    }
    case types.TOPIC_FETCH_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.TOPIC_FETCH_FAILED: {
      return action.payload.error;
    }
    case types.TOPIC_FETCH_STARTED: {
      return null;
    }
    case types.TOPIC_FETCH_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const selected = (state = null, action) => {
    switch(action.type) {
      case types.TOPIC_SELECTED: {
        return action.payload;
      }
      case types.TOPIC_FETCH_COMPLETED: {
        return action.payload.order[0];
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
  selected
});

export const getTopic = (state, id) => state.byId[id];
export const getTopics = state => state.order.map(id => getTopic(state, id));
export const isFetchingTopic = state => state.isFetching;
export const getFetchingErrorTopic = state => state.error;
export const getSelectedTopic = state => state.selected;
