import { schema } from 'normalizr';


export const message = new schema.Entity(
  'messages',
);
export const messages = new schema.Array(message);