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

export const selectTopic = id => ({
    type: types.TOPIC_SELECTED,
    payload: id
})