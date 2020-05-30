import * as types from '../types/messages'

export const startFetchingMessages = () => ({
    type: types.MESSAGES_FETCHING_STARTED,
  });

export const completeFetchingMessages = (entities, order) => ({
    type: types.MESSAGES_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingMessages = error => ({
    type: types.MESSAGES_FETCHING_FAILED,
    payload: {
        error,
    },
});

export const startAddingMessage = (Message,id) => ({
    type: types.MESSAGE_ADDITION_STARTED,
    payload: {
        content: Message,
        id
    },
});

export const completeAddingMessage = (oldId, Message) => ({
    type: types.MESSAGE_ADDITION_COMPLETED,
    payload: {
        oldId,
        content: Message,
    },
});
export const failAddingMessage = (oldId, error) => ({
    type: types.MESSAGE_ADDITION_FAILED,
    payload: {
        oldId,
        error,
    },
});