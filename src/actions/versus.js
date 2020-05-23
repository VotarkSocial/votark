import * as types from '../types/versus'
import { NULL_SETTED } from '../types/comment';

export const startFetchingVersus = () => ({
    type: types.VERSUS_FETCHING_STARTED,
  });

export const completeFetchingVersus = (entities, order) => ({
    type: types.VERSUS_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
        },
    });

export const failFetchingVersus = error => ({
    type: types.VERSUS_FETCHING_FAILED,
    payload: {
        error,
        },
    });

export const startSharingVersus = () => ({
    type: types.VERSUS_SHARE_STARTED,
    });

export const completeSharingVersus = () => ({
    type: types.VERSUS_SHARE_COMPLETED,
    });

export const failSharingVersus = error => ({
    type: types.VERSUS_SHARE_FAILED,
    payload: {
        error,
        },
    });

export const startVoteVersus = (direction,id) => ({
    type: types.VERSUS_VOTE_STARTED,
    payload:{
        direction,
        id
    },
    });

export const completeVoteVersus = () => ({
    type: types.VERSUS_VOTE_COMPLETED,
    });

export const failVoteVersus = error => ({
    type: types.VERSUS_VOTE_FAILED,
    payload: {
        error,
        },
    });

export const setNull = () => ({
    type: types.setNull,
})

export const setNull_toProps = () => ({
    type: NULL_SETTED
})