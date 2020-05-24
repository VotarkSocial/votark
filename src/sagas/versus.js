import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/versus';
import * as types from '../types/versus';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/versus';
import { startExtraUserFollowFetch, startUserFollowFetch, setUser, setExtraUser} from '../actions/user'
import { startFetchinLike, startFetchinHeart} from '../actions/reaction'
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  
  function* versusFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/versus/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            const normalized = normalize(jsonResult, schemas.versuses);
            yield put(actions.setNull())
            yield put(startFetchinHeart(normalized.result[0]))
            yield put(startFetchinLike(normalized.result[0]))
            yield put(startExtraUserFollowFetch(normalized.entities.versuses[normalized.result[0]].user1.id))
            yield put(startUserFollowFetch(normalized.entities.versuses[normalized.result[0]].user2.id))
            yield put(
            actions.completeFetchingVersus(
                normalized.entities.versuses,
                normalized.result
            ),
            );
            yield put(setUser(normalized.entities.versuses[normalized.result[0]].user1))
            yield put(setExtraUser(normalized.entities.versuses[normalized.result[0]].user2))
            
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchVersusFetch() {
    yield takeEvery(
      types.VERSUS_FETCHING_STARTED,
      versusFetch,
    );
  }

    
  function* voteFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/vote/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,user}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            yield put(startFetchinHeart(select(selectors.getVersus).id))
            yield put(startFetchinLike(select(selectors.getVersus).id))
            yield put(setUser(select(selectors.getVersus).user1))
            yield put(setExtraUser(select(selectors.getVersus).user2))
            yield put(startExtraUserFollowFetch(select(selectors.getExtraUser).id))
            yield put(startUserFollowFetch(select(selectors.getUser).id))
            yield put(actions.completeVoteVersus())
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failVoteVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failVoteVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchVoteFetch() {
    yield takeEvery(
      types.VERSUS_VOTE_STARTED,
      voteFetch,
    );
  }