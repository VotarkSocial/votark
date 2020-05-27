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


export const startUserPostsFetch = () => ({
    type: types.USER_POSTS_STARTED,
    });

export const completeUserPostFetch = (entities, order) => ({
    type: types.USER_POSTS_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failUserPostFetch = error => ({
    type: types.USER_POSTS_FAILED,
    payload: {
        error,
    },
});

export const setToNull = () => ({
    type: types.POSTS_SETTED_TO_NULL,
})