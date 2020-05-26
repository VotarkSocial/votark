import { schema } from 'normalizr';


export const user = new schema.Entity(
  'users',
);
export const users = new schema.Array(user);