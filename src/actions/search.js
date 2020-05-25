import * as types from '../types/search';


export const startUserHistoryFetching = () => ({
  type: types.USER_SEARCH_HISTORY_FETCHED_STARTED,
});


export const completeUserHistoryFetching = (entities, order) => ({
    type: types.USER_SEARCH_HISTORY_FETCHED_COMPLETED,
    payload: {
        entities,
        order,
    },
  });

export const failUserHistoryFetching = (error) => ({
    type: types.USER_SEARCH_HISTORY_FETCHED_FAILED,
    payload: {
        error,
    },
    
});


export const startHashtagHistoryFetching = () => ({
    type: types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED,
  });
  
export const completeHashtagHistoryFetching = (entities, order) => ({
    type: types.HASHTAG_SEARCH_HISTORY_FETCHED_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failHashtagHistoryFetching = (error) => ({
    type: types.HASHTAG_SEARCH_HISTORY_FETCHED_FAILED,
    payload: {
        error,
    },
});



export const startUserFetching = (query) => ({
    type: types.USER_SEARCH_FETCHED_STARTED,
    payload: query
  });
  
  
  export const completeUserFetching = (entities, order) => ({   
      type: types.USER_SEARCH_FETCHED_COMPLETED,
      payload: {
        entities,
        order,
    },
    });
  
  export const failUserFetching = (error) => ({
      type: types.USER_SEARCH_FETCHED_FAILED,
      payload: {
          error,
      },
  });
  
  
  export const startHashtagFetching = (query) => ({
      type: types.HASHTAG_SEARCH_FETCHED_STARTED,
      payload:query
    });
    
  export const completeHashtagFetching = (entities, order) => ({
      type: types.HASHTAG_SEARCH_FETCHED_COMPLETED,
      payload: {
        entities,
        order,
    },
  });
  
  export const failHashtagFetching = (error) => ({
      type: types.HASHTAG_SEARCH_FETCHED_FAILED,
      payload: {
          error,
      },
  });
  

