import { schema } from 'normalizr';


export const like = new schema.Entity(
  'likes',
);
export const likes = new schema.Array(likes);