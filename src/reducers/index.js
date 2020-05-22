import { combineReducers } from 'redux';
import auth, * as authSelectors from './auth';
import versus, * as versusSelectors from './versus';
import comment, * as commentSelectors from './comment';
import reaction, * as reactionSelectros from './reaction';
import user,* as userSelectors from './user'
import story, * as storySelectors from './stories'

const reducer = combineReducers({
    auth,
    versus,
    comment,
    reaction,
    user,
    story
});


export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) !== null;
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

export const getVersus = (state) => versusSelectors.getVersus(state.versus);
export const isFetchingVersus = state => versusSelectors.getisFetchingVersus(state.versus);
export const isFetchingShare = state => versusSelectors.getisFetchingShare(state.versus);
export const isFetchingVote = state => versusSelectors.getisFetchingVote(state.versus);
export const getFetchError = state => versusSelectors.getFetchError(state.versus);
export const getShareError = state => versusSelectors.getShareError(state.versus);
export const getVoteError = state => versusSelectors.getVoteError(state.versus);

export const getComment = (state, id) => commentSelectors.getComment(state.comment, id);
export const getComments = state => commentSelectors.getComments(state.comment)
export const isFetchingComment = state => commentSelectors.getisFetching(state.comment)
export const getErrorComment = state => commentSelectors.getError(state.comment)

export const getLike = (state) => reactionSelectros.getLike(state.reaction);
export const getisLiked = state => reactionSelectros.getisLiked(state.reaction);
export const getHeart = (state) => reactionSelectros.getHeart(state.reaction);
export const getisHearted = state => reactionSelectros.getisHearted(state.reaction);
export const isFetchingReaction = state => reactionSelectros.getisFetching(state.reaction);
export const getErrorReaction = state => reactionSelectros.getError(state.reaction);

export const getUser = (state) => userSelectors.getUser(state.user);
export const getExtraUser = state => userSelectors.getExtraUser(state.user);
export const getIsFollowingUser = (state) => userSelectors.getIsFollowingUser(state.user);
export const getIsFollowingExtraUser = state => userSelectors.getIsFollowingExtraUser(state.user);
export const isFetchingUser = state => userSelectors.getisFetching(state.user);
export const getErrorUser = state => userSelectors.getError(state.user);

export const getHidden = state => storySelectors.getHidden(state.story)