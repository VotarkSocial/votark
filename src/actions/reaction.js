import * as types from '../types/reactions'

export const startLikeVersus = (id) => ({
    type: types.VERSUS_LIKE_STARTED,
    payload:{
        versus: id,
    },
    });

export const completeLikeVersus = (entity) => ({
    type: types.VERSUS_LIKE_COMPLETED,
    payload: entity
    });

export const failLikeVersus = error => ({
    type: types.VERSUS_LIKE_FAILED,
    payload: {
        error,
        },
    });

export const startHeartVersus = (id) => ({
    type: types.VERSUS_HEART_STARTED,
    payload:{
        versus: id,
    },
    });

export const completeHeartVersus = (entity) => ({
    type: types.VERSUS_HEART_COMPLETED,
    payload: entity
    });

export const failHeartVersus = error => ({
    type: types.VERSUS_HEART_FAILED,
    payload: {
        error,
        },
    });

export const startUnLikeVersus = (id) => ({
    type: types.VERSUS_UNLIKE_STARTED,
    payload:{
        id,
    },
    });

export const completeUnLikeVersus = () => ({
    type: types.VERSUS_UNLIKE_COMPLETED,
    });

export const failUnLikeVersus = error => ({
    type: types.VERSUS_UNLIKE_FAILED,
    payload: {
        error,
        },
    });

export const startUnHeartVersus = (id) => ({
    type: types.VERSUS_UNHEART_STARTED,
    payload:{
        id,
    },
    });

export const completeUnHeartVersus = () => ({
    type: types.VERSUS_UNHEART_COMPLETED,
    });

export const failUnHeartVersus = error => ({
    type: types.VERSUS_UNHEART_FAILED,
    payload: {
        error,
        },
});

export const startFetchinLike = (id) => ({
    type: types.VERSUS_LIKE_FETCH_STARTED,
    payload:{
        id,
    },
    });

export const completeFetchLike = (entity) => ({
    type: types.VERSUS_LIKE_FETCH_COMPLETED,
    payload: entity
    });

export const failFetchLike = error => ({
    type: types.VERSUS_LIKE_FETCH_FAILED,
    payload: {
        error,
        },
    });

export const startFetchinHeart = (id) => ({
    type: types.VERSUS_HEART_FETCH_STARTED,
    payload:{
        id,
    },
    });

export const completeFetchHeart = (entity) => ({
    type: types.VERSUS_HEART_FETCH_COMPLETED,
    payload: entity
    });

export const failFetchHeart = error => ({
    type: types.VERSUS_HEART_FETCH_FAILED,
    payload: {
        error,
        },
    });