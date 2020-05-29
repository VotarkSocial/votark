import { schema } from 'normalizr';


export const chat = new schema.Entity(
  'chats',
);
export const chats = new schema.Array(chat);