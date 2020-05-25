import { combineReducers } from 'redux';
import * as types from '../types/search';


const hashtags = (state = {}, action) => {
  switch(action.type) {
    case types.HASHTAG_SEARCH_HISTORY_FETCHED_COMPLETED: {
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
    case types.HASHTAG_SEARCH_FETCHED_COMPLETED: {
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
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED:{
            return {}
        }
        case types.HASHTAG_SEARCH_FETCHED_STARTED:{
            return {}
        }
    default: {
      return state;
    }
  }
};

const users = (state = {}, action) => {
    switch(action.type) {
      case types.USER_SEARCH_HISTORY_FETCHED_COMPLETED: {
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
      case types.USER_SEARCH_FETCHED_COMPLETED: {
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
      case types.USER_SEARCH_FETCHED_STARTED:{
        return {}
    }
    case types.USER_SEARCH_HISTORY_FETCHED_STARTED:{
        return {}
    }
      default: {
        return state;
      }
    }
  };

const UserOrder = (state = [], action) => {
  switch(action.type) {
    case types.USER_SEARCH_FETCHED_COMPLETED: {
      return action.payload.order;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_COMPLETED:{
        return action.payload.order
    }
    case types.USER_SEARCH_FETCHED_STARTED:{
      return []
    }
    case types.USER_SEARCH_HISTORY_FETCHED_STARTED:{
        return []
    }
    default: {
      return state;
    }
  }
};


const HashtagOrder = (state = [], action) => {
    switch(action.type) {
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_COMPLETED: {
        return action.payload.order;
      }
      case types.HASHTAG_SEARCH_FETCHED_COMPLETED:{
          return action.payload.order
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED:{
          return []
      }
      case types.HASHTAG_SEARCH_FETCHED_STARTED:{
          return []
      }
      default: {
        return state;
      }
    }
  };

const isFetchingUser = (state = false, action) => {
  switch(action.type) {
    case types.USER_SEARCH_FETCHED_STARTED: {
      return true;
    }
    case types.USER_SEARCH_FETCHED_COMPLETED: {
      return false;
    }
    case types.USER_SEARCH_FETCHED_FAILED: {
      return false;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_STARTED: {
      return true;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_COMPLETED: {
      return false;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const isFetchingHashtag = (state = false, action) => {
    switch(action.type) {
      case types.HASHTAG_SEARCH_FETCHED_STARTED: {
        return true;
      }
      case types.HASHTAG_SEARCH_FETCHED_COMPLETED: {
        return false;
      }
      case types.HASHTAG_SEARCH_FETCHED_FAILED: {
        return false;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED: {
        return true;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_COMPLETED: {
        return false;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };

const errorUser = (state = null, action) => {
  switch(action.type) {
    case types.USER_SEARCH_FETCHED_FAILED: {
      return action.payload.error;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_FAILED: {
      return action.payload.error;
    }
    case types.USER_SEARCH_FETCHED_COMPLETED: {
      return null;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_COMPLETED: {
        return null;
    }
    case types.USER_SEARCH_HISTORY_FETCHED_STARTED: {
        return null;
    }
    case types.USER_SEARCH_FETCHED_STARTED: {
        return null;
    }
    default: {
      return state;
    }
  }
}

  const errorHashtag = (state = null, action) => {
    switch(action.type) {
      case types.HASHTAG_SEARCH_FETCHED_FAILED: {
        return action.payload.error;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_FAILED: {
        return action.payload.error;
      }
      case types.HASHTAG_SEARCH_FETCHED_COMPLETED: {
        return null;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_COMPLETED: {
          return null;
      }
      case types.HASHTAG_SEARCH_FETCHED_STARTED: {
          return null;
      }
      case types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED: {
          return null;
      }default: {
        return state;
      }
    }
};

export default combineReducers({
    users,
    hashtags,
    HashtagOrder,
    UserOrder,
    errorHashtag,
    errorUser,
    isFetchingHashtag,
    isFetchingUser
  });
  
  export const getUser = (state, id) => state.users[id];
  export const getHashtag = (state,id) => state.hashtags[id]

  export const getSearchedUsers = state => state.UserOrder.map(id => getUser(state, id));
  export const getSearchedHashtag = state => state.HashtagOrder.map(id => getHashtag(state, id));
  export const getisFetchingHashtag = state => state.isFetchingHashtag;
  export const getisFetchingSearchedUser = state => state.isFetchingUser;
  export const getError_Hashtag_search = state => state.errorHashtag;
  export const getError_User_search = state => state.errorUser;