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
            yield put(setUser(normalized.entities.versuses[normalized.result[0]].user1))
            yield put(setExtraUser(normalized.entities.versuses[normalized.result[0]].user2))
            yield put(
              actions.completeFetchingVersus(
                  normalized.entities.versuses,
                  normalized.result
              ),
              );
             
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingVersus('CONNECTION FAILED'));
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
        const versusid = yield select(selectors.getLastSelected);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/vote/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,user,versus:versusid}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );

          const versus = yield select(selectors.getVersus)
          yield put(startFetchinHeart(versus.id))
          yield put(startFetchinLike(versus.id))
          yield put(setUser(versus.user1))
          yield put(setExtraUser(versus.user2))
          yield put(startExtraUserFollowFetch(versus.user2.id))
          yield put(startUserFollowFetch(versus.user1.id))
          if (response.status === 201) {
            yield put(actions.completeVoteVersus(versus.id))
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failVoteVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failVoteVersus('CONNECTION FAILED'));
      }
  }
  
  export function* watchVoteFetch() {
    yield takeEvery(
      types.VERSUS_VOTE_STARTED,
      voteFetch,
    );
  }