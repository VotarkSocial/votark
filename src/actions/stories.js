import * as types from '../types/stories'

export const hideStories = () => ({
    type: types.STORIES_HIDDEN
})

export const showStories = () => ({
    type: types.STORIES_SHOWED
})