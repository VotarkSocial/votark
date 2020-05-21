import * as types from '../types/user'

export const startFollowUser = (id) => ({
    type: types.USER_FOLLOW_STARTED,
    payload:{
        id,
    },
    });

export const completeFollowUser = () => ({
    type: types.USER_FOLLOW_COMPLETED,
    });

export const failFollowUser = error => ({
    type: types.USER_FOLLOW_FAILED,
    payload: {
        error,
        },
    });

export const startUnFollowUser = (id) => ({
    type: types.USER_UNFOLLOW_STARTED,
    payload:{
        id,
    },
    });

export const completeUnFollowUser = () => ({
    type: types.USER_UNFOLLOW_COMPLETED,
    });

export const failUnFollowUser = error => ({
    type: types.USER_UNFOLLOW_FAILED,
    payload: {
        error,
        },
    });


export const startFolloExtraUser = (id) => ({
    type: types.EXTRA_USER_FOLLOW_STARTED,
    payload:{
        id,
    },
    });

export const completeFollowExtraUser = () => ({
    type: types.EXTRA_USER_FOLLOW_COMPLETED,
    });

export const failFollowExtraUser = error => ({
    type: types.EXTRA_USER_FOLLOW_FAILED,
    payload: {
        error,
        },
    });

export const startUnFollowExtraUser = (id) => ({
    type: types.EXTRA_USER_UNFOLLOW_STARTED,
    payload:{
        id,
    },
    });

export const completeUnFollowExtraUser = () => ({
    type: types.EXTRA_USER_UNFOLLOW_COMPLETED,
    });

export const failUnFollowExtraUser = error => ({
    type: types.EXTRA_USER_UNFOLLOW_FAILED,
    payload: {
        error,
        },
    });


export const startUserFollowFetch = (id) => ({
    type: types.USER_IS_FOLLOWING_FETCH_STARTED,
    payload:{
        id,
    },
    });

export const completeUserFollowFetch = (entity) => ({
    type: types.USER_IS_FOLLOWING_FETCH_COMPLETED,
    payload: entity
    });
    
export const failUserFollowFetcch = error => ({
    type: types.USER_IS_FOLLOWING_FETCH_FAILED,
    payload: {
        error,
        },
    });

export const startExtraUserFollowFetch = (id) => ({
    type: types.EXTRA_USER_IS_FOLLOWING_FETCH_STARTED,
    payload:{
        id,
    },
    });

export const completeExtraUserFollowFetch = (entity) => ({
    type: types.EXTRA_USER_IS_FOLLOWING_FETCH_COMPLETED,
    payload: entity
    });
    
export const failExtraUserFollowFetcch = error => ({
    type: types.EXTRA_USER_IS_FOLLOWING_FETCH_FAILED,
    payload: {
        error,
        },
    });

export const setUser = (entity) => ({
    type: types.USER_SETTED,
    payload: entity
})

export const setExtraUser = (entity) => ({
    type: types.EXTRA_USER_SETTED,
    payload: entity
})

