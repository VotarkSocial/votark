import * as types from '../types/currentPost'

export const startCurrentPostFetch = () => ({
    type: types.CURRENT_POST_FETCH_STARTED,
    });

export const completeCurrentPostFetchs = (entity) => ({
    type: types.CURRENT_POST_FETCH_COMPLETED,
    payload: entity
    });

export const failCurrentPostFetch = error => ({
    type: types.CURRENT_POST_FETCH_FAILED,
    payload: {
        error,
        },
    });

export const selectCurrentPost = id => ({
    type: types.CURRENT_POST_SELECTEDD,
    payload: id
    });