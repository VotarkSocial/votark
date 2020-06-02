import * as types from '../types/topic'

export const startFetchTopic = () => ({
    type: types.TOPIC_FETCH_STARTED,
  });

export const completeFetchTopic = (entities, order) => ({
    type: types.TOPIC_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchTopic = error => ({
    type: types.TOPIC_FETCH_FAILED,
    payload: {
        error,
    },
});


export const startTopic = () => ({
    type: types.TOPIC_STARTED,
  });

export const completeTopic = (entities, order) => ({
    type: types.TOPIC_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failTopic = error => ({
    type: types.TOPIC_FAILED,
    payload: {
        error,
    },
});


export const selectTopic = id => ({
    type: types.TOPIC_SELECTED,
    payload: id
})


export const startAddingTopic = (Topic,id) => ({
    type: types.TOPIC_ADDITION_STARTED,
    payload: {
        content: Topic,
        id
    },
});

export const completeAddingTopic = (oldId, Topic) => ({
    type: types.TOPIC_FETCH_COMPLETED,
    payload: {
        oldId,
        content: Topic,
    },
});
export const failAddingTopic = (oldId, error) => ({
    type: types.TOPIC_FETCH_FAILED,
    payload: {
        oldId,
        error,
    },
});