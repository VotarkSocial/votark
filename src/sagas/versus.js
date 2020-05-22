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
import { logout } from '../actions/auth';
  
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
            put(actions.setNull())
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
        // yield put(actions.failLogin('Falló horrible la conexión mano'));
      }
  }
  
  export function* watchVersusFetch() {
    yield takeEvery(
      types.VERSUS_FETCHING_STARTED,
      versusFetch,
    );
  }