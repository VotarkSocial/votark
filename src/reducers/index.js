import { combineReducers } from 'redux';
import auth, * as authSelectors from './auth';


const reducer = combineReducers({
    auth,
});


export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);
export const getIsRegistrating = state => authSelectors.getIsRegistrating(state.auth);
export const getSignUpError = state => authSelectors.getSignUpError(state.auth);
export const isReseting = state => authSelectors.getisReseting(state.auth)
export const resetError = state => authSelectors.reset_Error(state.auth)
export const hasreset = state => authSelectors.has_reset(state.auth)