import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/versus';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.VERSUS_FETCHING_COMPLETED: {
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
    case types.VERSUS_FETCHING_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.PET_OWNER_ADD_STARTED: {
      return [...state, action.payload.id];
    }
    case types.VERSUS_VOTE_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.VERSUS_FETCHING_STARTED: {
      return true;
    }
    case types.VERSUS_FETCHING_COMPLETED: {
      return false;
    }
    case types.VERSUS_FETCHING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.VERSUS_FETCHING_FAILED: {
      return action.payload.error;
    }
    case types.VERSUS_FETCHING_COMPLETED: {
      return null;
    }
    case types.VERSUS_FETCHING_STARTED: {
      return null;
    }
    default: {
      return state;
    }
  }
};


const errorShare = (state = null, action) => {
    switch(action.type) {
      case types.VERSUS_SHARE_FAILED: {
        return action.payload.error;
      }
      case types.VERSUS_SHARE_COMPLETED: {
        return null;
      }
      case types.VERSUS_SHARE_STARTED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };

  const errorVote = (state = null, action) => {
    switch(action.type) {
      case types.VERSUS_VOTE_FAILED: {
        return action.payload.error;
      }
      case types.VERSUS_VOTE_COMPLETED: {
        return null;
      }
      case types.VERSUS_VOTE_STARTED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };

const isFetchingShare = (state = false, action) => {
    switch(action.type) {
      case types.VERSUS_SHARE_STARTED: {
        return true;
      }
      case types.VERSUS_SHARE_COMPLETED: {
        return false;
      }
      case types.VERSUS_SHARE_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };

  const isFetchingVote = (state = false, action) => {
    switch(action.type) {
      case types.VERSUS_VOTE_STARTED: {
        return true;
      }
      case types.VERSUS_VOTE_COMPLETED: {
        return false;
      }
      case types.VERSUS_VOTE_FAILED: {
        return false;
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
  isFetchingShare,
  isFetchingVote,
  error,
  errorShare,
  errorVote
});

export const getVersus = (state) => state.order[0]!==undefined?state.byId[state.order[0]]:null;
export const getisFetchingVersus = state => state.isFetching;
export const getisFetchingShare = state => state.isFetchingShare;
export const getisFetchingVote = state => state.isFetchingVote;
export const getFetchError = state => state.error;
export const getShareError = state => state.errorShare;
export const getVoteError = state => state.errorVote;
