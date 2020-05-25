import { schema } from 'normalizr';


export const hashtag = new schema.Entity(
  'hashtags',
);
export const hashtags = new schema.Array(hashtag);