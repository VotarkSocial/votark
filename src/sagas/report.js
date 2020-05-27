import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/report';
import * as types from '../types/report';
import { API_URL } from '../../configuration';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  function* sendReport(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/report/`,
            {
              method: 'POST',
              body: action.payload,
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            yield put(actions.completeSendingReport());
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failSendingReport(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failSendingReport('CONNECTION FAILED'));
      }
  }
  
  export function* watchSendReport() {
    yield takeEvery(
      types.SEND_REPORT_STARTED,
      sendReport,
    );
  }
