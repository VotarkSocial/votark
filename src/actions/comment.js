import * as types from '../types/comment'

export const startFetchingComments = (id) => ({
    type: types.COMMENTS_FETCHING_STARTED,
    payload:{id}
  });

export const completeFetchingComments = (entities, order) => ({
    type: types.COMMENTS_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingComments = error => ({
    type: types.COMMENTS_FETCHING_FAILED,
    payload: {
        error,
    },
});

export const startAddingComment = (Comment,versusid,id) => ({
    type: types.COMMENT_ADDITION_STARTED,
    payload: {
        content: Comment,
        versusid,
        id
    },
});

export const completeAddingComment = (oldId, Comment) => ({
    type: types.COMMENT_ADDITION_COMPLETED,
    payload: {
        oldId,
        content: Comment,
    },
});
export const failAddingComment = (oldId, error) => ({
    type: types.COMMENT_ADDITION_FAILED,
    payload: {
        oldId,
        error,
    },
});