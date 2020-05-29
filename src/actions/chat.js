import * as types from '../types/chat'

export const startFetchingChats = () => ({
    type: types.CHATS_FETCHING_STARTED,
  });

export const completeFetchingChats = (entities, order) => ({
    type: types.CHATS_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingChats = error => ({
    type: types.CHATS_FETCHING_FAILED,
    payload: {
        error,
    },
});

export const startAddingChat = (Chat,id) => ({
    type: types.CHAT_ADDITION_STARTED,
    payload: {
        name: Chat,
        id
    },
});

export const completeAddingChat = (oldId, Chat) => ({
    type: types.CHAT_ADDITION_COMPLETED,
    payload: {
        oldId,
        content: Chat,
    },
});
export const failAddingChat = (oldId, error) => ({
    type: types.CHAT_ADDITION_FAILED,
    payload: {
        oldId,
        error,
    },
});

export const startAddingUser = (id) => ({
    type: types.USER_ADDITION_STARTED,
    payload: {id}
  });

export const completeAddingUser = () => ({
    type: types.USER_ADDITION_COMPLETED,
    });

export const failAddingUser = error => ({
    type: types.USER_ADDITION_FAILED,
    payload: {
        error,
    },
});

export const startAddingAdmin = (id) => ({
    type: types.ADMIN_ADDITION_STARTED,
    payload: {id}
});

export const completeAddingAdmin = () => ({
    type: types.ADMIN_ADDITION_COMPLETED,
});

export const failAddingAdmin = (error) => ({
    type: types.ADMIN_ADDITION_FAILED,
    payload: {
        error,
    },
});

export const selectChat = (id) => ({
    type: types.CHAT_SELECTED,
    payload: id
})