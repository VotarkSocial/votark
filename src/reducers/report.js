import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/report';

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.SEND_REPORT_STARTED: {
      return true;
    }
    case types.SEND_REPORT_COMPLETED: {
      return false;
    }
    case types.SEND_REPORT_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.SEND_REPORT_FAILED: {
      return action.payload.error;
    }
    case types.SEND_REPORT_COMPLETED: {
      return null;
    }
    case types.SEND_REPORT_STARTED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const isReporting = (state=false, action) => {
    switch (action.type) {
        case types.REPORT:
            return !state
        default:
            return state
    }
}

export default combineReducers({
  isReporting,
  isFetching,
  error,
});

export const getIsReporting = state => state.isReporting
export const getisFetchingReport = state => state.isFetching;
export const getErrorReport = state => state.error;
