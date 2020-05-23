import { schema } from 'normalizr';


export const comment = new schema.Entity(
  'comments',
);
export const comments = new schema.Array(comment);