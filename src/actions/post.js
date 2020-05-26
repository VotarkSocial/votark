import * as types from '../types/posts'

export const startFetchPost = () => ({
    type: types.POST_FETCH_STARTED,
  });

export const completeFetchPost = (entities, order) => ({
    type: types.POST_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchPost = error => ({
    type: types.POST_FETCH_FAILEED,
    payload: {
        error,
    },
});
