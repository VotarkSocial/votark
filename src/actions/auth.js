import * as types from '../types/auth';


export const startLogin = (username, password) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { username, password },
});

export const completeLogin = token => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = error => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error },
});

export const startRegistration = (username, password, email) => ({
  type: types.REGISTRATION_STARTED,
  payload: { username, password, email },
});

export const completeRegistration = () => ({
  type: types.REGISTRATION_COMPLETED,
});

export const failRegistration = error => ({
  type: types.REGISTRATION_FAILED,
  payload: { error },
});

export const logout = () => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = () => ({
  type: types.TOKEN_REFRESH_STARTED,
});

export const completeTokenRefresh = newToken => ({
  type: types.TOKEN_REFRESH_COMPLETED,
  payload: { newToken },
});

export const failTokenRefresh = error => ({
  type: types.TOKEN_REFRESH_FAILED,
  payload: { error },
});
