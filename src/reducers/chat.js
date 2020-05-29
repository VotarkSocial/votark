import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/chat';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.CHATS_FETCHING_COMPLETED: {
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
    case types.CHAT_ADDITION_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.CHAT_ADDITION_COMPLETED: {
      const { oldId, Chat } = action.payload;
      const newState = omit(state, oldId);
      newState[Chat.id] = {
        ...Chat,
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
    case types.CHATS_FETCHING_COMPLETED: {
      return action.payload.order;
    }
    case types.CHAT_ADDITION_STARTED: {
      return [...state, action.payload.id];
    }
    case types.CHAT_ADDITION_COMPLETED: {
      const { oldId, comment } = action.payload;
      return state.map(id => id === oldId ? comment.id : id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.CHATS_FETCHING_STARTED: {
      return true;
    }
    case types.CHATS_FETCHING_COMPLETED: {
      return false;
    }
    case types.CHATS_FETCHING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.CHATS_FETCHING_FAILED: {
      return action.payload.error;
    }
    case types.CHATS_FETCHING_STARTED: {
      return null;
    }
    case types.CHATS_FETCHING_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};


const isAddingUser = (state = false, action) => {
    switch(action.type) {
      case types.USER_ADDITION_STARTED: {
        return true;
      }
      case types.USER_ADDITION_COMPLETED: {
        return false;
      }
      case types.USER_ADDITION_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };
  
  const errorUser_Chat = (state = null, action) => {
    switch(action.type) {
      case types.USER_ADDITION_FAILED: {
        return action.payload.error;
      }
      case types.USER_ADDITION_COMPLETED: {
        return null;
      }
      case types.USER_ADDITION_STARTED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };


  const isAddingAdmin = (state = false, action) => {
    switch(action.type) {
      case types.ADMIN_ADDITION_STARTED: {
        return true;
      }
      case types.ADMIN_ADDITION_COMPLETED: {
        return false;
      }
      case types.ADMIN_ADDITION_FAILED: {
        return false;
      }
      default: {
        return state;
      }
    }
  };
  
  const errorAdmin = (state = null, action) => {
    switch(action.type) {
      case types.ADMIN_ADDITION_FAILED: {
        return action.payload.error;
      }
      case types.ADMIN_ADDITION_STARTED: {
        return null;
      }
      case types.ADMIN_ADDITION_COMPLETED: {
        return null;
      }
      default: {
        return state;
      }
    }
  };

  const chatSelected = (state=null,action) => {
    switch (action.type) {
      case types.CHAT_SELECTED:
          return action.payload;
      default:
        return state;
    }
  }

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
  isAddingAdmin,
  isAddingUser,
  errorUser_Chat,
  errorAdmin,
  chatSelected,
});

export const getChat = (state, id) => state.byId[id];
export const getChats = state => state.order.map(id => getChat(state, id));
export const getisFetchingChat = state => state.isFetching;
export const getErrorChat = state => state.error;
export const getIsAddingAdmin = state => state.isAddingAdmin;
export const getIsAddingUser = state => state.isAddingUser;
export const getErrorUserChat = state => state.errorUser_Chat;
export const getErrorAdmin = state => state.errorAdmin;
export const getChatSelected = state => state.chatSelected;