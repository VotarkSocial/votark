import { combineReducers } from 'redux';
import auth, * as authSelectors from './auth';
import chat, * as chatSelectors from './chat';
import comment, * as commentSelectors from './comment';
import message, * as messageSelectors from './message';
import posts, * as postSelectors from './post';
import reaction, * as reactionSelectros from './reaction';
import report, * as reportSelectors from './report';
import search, * as searchSelectors from './search';
import story, * as storySelectors from './stories';
import topic, * as topicSelectors from './topic';
import user,* as userSelectors from './user';
import versus, * as versusSelectors from './versus';

const reducer = combineReducers({
    auth,
    chat,
    comment,
    message,
    posts,
    reaction,
    report,
    search,
    story,
    topic,
    user,
    versus,
});


export default reducer;

export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getIsRegistrating = state => authSelectors.getIsRegistrating(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);
export const getSignUpError = state => authSelectors.getSignUpError(state.auth);
export const hasreset = state => authSelectors.has_reset(state.auth)
export const isAuthenticated = state => getAuthToken(state) !== null;
export const isReseting = state => authSelectors.getisReseting(state.auth)
export const resetError = state => authSelectors.reset_Error(state.auth)

export const getFetchError = state => versusSelectors.getFetchError(state.versus);
export const getLastSelected = state => versusSelectors.getLastSelected(state.versus)
export const getShareError = state => versusSelectors.getShareError(state.versus);
export const getVersus = (state) => versusSelectors.getVersus(state.versus);
export const getVoteError = state => versusSelectors.getVoteError(state.versus);
export const isFetchingShare = state => versusSelectors.getisFetchingShare(state.versus);
export const isFetchingVersus = state => versusSelectors.getisFetchingVersus(state.versus);
export const isFetchingVote = state => versusSelectors.getisFetchingVote(state.versus);

export const getComment = (state, id) => commentSelectors.getComment(state.comment, id);
export const getComments = state => commentSelectors.getComments(state.comment)
export const getErrorComment = state => commentSelectors.getError(state.comment)
export const isFetchingComment = state => commentSelectors.getisFetching(state.comment)

export const getErrorReaction = state => reactionSelectros.getError(state.reaction);
export const getHeart = (state) => reactionSelectros.getHeart(state.reaction);
export const getisHearted = state => reactionSelectros.getisHearted(state.reaction);
export const getisLiked = state => reactionSelectros.getisLiked(state.reaction);
export const getLike = (state) => reactionSelectros.getLike(state.reaction);
export const isFetchingReaction = state => reactionSelectros.getisFetching(state.reaction);

export const getErrorUser = state => userSelectors.getError(state.user);
export const getExtraUser = state => userSelectors.getExtraUser(state.user);
export const getIsFollowingExtraUser = state => userSelectors.getIsFollowingExtraUser(state.user);
export const getIsFollowingUser = (state) => userSelectors.getIsFollowingUser(state.user);
export const getUser = (state) => userSelectors.getUser(state.user);
export const isFetchingUser = state => userSelectors.getisFetching(state.user);
export const getFollowersCount = state => userSelectors.getFollowersCount(state.user);
export const getFollowingCount = state => userSelectors.getFollowingCount(state.user);
export const getisFetchingFollowInfo = state => userSelectors.getisFetchingFollowInfo(state.user);
export const getisFetchingUserStories = state => userSelectors.getisFetchingUserStories(state.user);
export const getUserStory = (state, id) => userSelectors.getUserStory(state.user,id);
export const getUserStories = state => userSelectors.getUserStories(state.user);
export const getFollowingError = state => userSelectors.getFollowingError(state.user);
export const getUserStorieserror = state => userSelectors.getUserStorieserror(state.user);
export const getIsEditingUser = state => userSelectors.getIsEditingUser(state.user);
export const getIsDeletingUser = state => userSelectors.getIsDeletingUser(state.user);

export const getHidden = state => storySelectors.getHidden(state.story)

export const getSearchedUsers = state => searchSelectors.getSearchedUsers(state.search);
export const getSearchedHashtag = state => searchSelectors.getSearchedHashtag(state.search);
export const getisFetchingHashtag = state => searchSelectors.getisFetchingHashtag(state.search);
export const getisFetchingSearchedUser = state => searchSelectors.getisFetchingSearchedUser(state.search);
export const getError_Hashtag_search = state => searchSelectors.getError_Hashtag_search(state.search);
export const getError_User_search = state => searchSelectors.getError_User_search(state.search);


export const getTopic = (state, id) => topicSelectors.getTopic(state.topic,id);
export const getTopics = state => topicSelectors.getTopics(state.topic);
export const isFetchingTopic = state => topicSelectors.isFetchingTopic(state.topic);
export const getFetchingErrorTopic = state => topicSelectors.getFetchingErrorTopic(state.topic);
export const getTopicSelected = state => topicSelectors.getSelectedTopic(state.topic)

export const getPost = (state, id) => postSelectors.getPost(state.posts,id);
export const getPosts = state => postSelectors.getPosts(state.posts);
export const isFetchingPost = state => postSelectors.isFetchingPost(state.posts);
export const getFetchingErrorPost = state => postSelectors.getFetchingErrorPost(state.posts);
export const getFetchedOnce = state => postSelectors.getFetchedOnce(state.posts);

export const getIsReporting = state => reportSelectors.getIsReporting(state.report);
export const getisFetchingReport = state => reportSelectors.getisFetchingReport(state.report);
export const getErrorReport = state => reportSelectors.getErrorReport(state.report);

export const getChat = (state, id) => chatSelectors.getChat(state.chat,id);
export const getChats = state => chatSelectors.getChats(state.chat);
export const getisFetchingChat = state => chatSelectors.getisFetchingChat(state.chat);
export const getErrorChat = state => chatSelectors.getErrorChat(state.chat);
export const getIsAddingAdmin = state => chatSelectors.getIsAddingAdmin(state.chat);
export const getIsAddingUser = state => chatSelectors.getIsAddingUser(state.chat);
export const getErrorUserChat = state => chatSelectors.getErrorUserChat(state.chat);
export const getErrorAdmin = state => chatSelectors.getErrorAdmin(state.chat);
export const getChatSelected = state => chatSelectors.getChatSelected(state.chat);
export const getChatSelectedWithProps = state => chatSelectors.getChat(state.chat,getChatSelected(state))?chatSelectors.getChat(state.chat,getChatSelected(state)):null;

export const getMessage = (state, id) => messageSelectors.getMessage(state.message,id);
export const getMessages = state => messageSelectors.getMessages(state.message);
export const getisFetchingMessage = state => messageSelectors.getisFetchingMessage(state.message);
export const getErrorMessage = state => messageSelectors.getErrorMessage(state.message);