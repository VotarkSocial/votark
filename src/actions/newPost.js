import * as types from '../types/post'

export const startAddingPost = (Post) => ({
    type: types.POST_ADDED_STARTED,
    payload: Post,
});

export const completeAddingPost = () => ({
    type: types.POST_ADDED_COMPLETED,
});
export const failAddingPost = (error) => ({
    type: types.POST_ADDED_FAILED,
    payload: {
        error,
    },
});

export const setPicture = (image) => ({
    type: types.PICTURE_SETTED,
    payload: image
})