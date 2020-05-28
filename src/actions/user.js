import * as types from '../types/user'

export const startFollowUser = (user,onVersus) => ({
    type: types.USER_FOLLOW_STARTED,
    payload:{
        follower: user,
        onVersus
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


export const startFolloExtraUser = (user,onVersus) => ({
    type: types.EXTRA_USER_FOLLOW_STARTED,
    payload:{
        follower: user,
        onVersus
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



export const startFollowersFetching = () => ({
    type: types.FOLLOWERS_FETCH_STARTED,
    });

export const completeFolllwersFetch = (entities, order, userid) => ({
    type: types.FOLLOWERS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
        userid,
    },
    });

export const failFollowersFetch = error => ({
    type: types.FOLLOWERS_FETCH_FAILED,
    payload: {
        error,
    },
});



export const startFollowingFetching = () => ({
    type: types.FOLLOWING_FETCH_STARTED,
    });

export const completeFolllowingFetch = (entities, order) => ({
    type: types.FOLLOWING_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFollowingFetch = error => ({
    type: types.FOLLOWING_FETCH_FAILED,
    payload: {
        error,
    },
});





export const startUpdate = (entity) => ({
    type: types.UPDATE_STARTED,
    payload: entity
    });

export const completeUptade = (entities) => ({
    type: types.UPDATE_COMPLETED,
    payload: {
        entities,
    },
    });

export const failUpdate = error => ({
    type: types.UPDATE_FAILED,
    payload: {
        error,
    },
});


export const editUser = () => ({
    type: types.PROFILE_EDITED,
});

export const cance_editUser = () => ({
    type: types.PROFILE_EDITED_CANCELED,
});



export const deleteUser = () => ({
    type: types.PROFILE_DELETED,
});

export const canceL_deleteUser = () => ({
    type: types.PROFILE_DELETED_CANCELED,
});






export const startDelete = () => ({
    type: types.DELETE_STARTED,
    });

export const completeDelete = () => ({
    type: types.DELETE_COMPLETED,
    });

export const failDelete = error => ({
    type: types.DELETE_FAILED,
    payload: {
        error,
    },
});


export const startStoriesFetch = () => ({
    type: types.USER_STORIES_STARTED,
    });

export const completeStoriesFetch = (entities, order) => ({
    type: types.USER_STORIES_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failStoriesFetch = error => ({
    type: types.USER_STORIES_FAILED,
    payload: {
        error,
    },
});


export const startUsFetch = (id) => ({
    type: types.USER_STARTED,
    payload: id,
    });

export const completeUsFetch = (entity) => ({
    type: types.USER_COMPLETED,
    payload: entity,
});

export const failUserFetch = error => ({
    type: types.USER_FAILED,
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

