import { schema } from 'normalizr';


export const topic = new schema.Entity(
  'topics',
);
export const topics = new schema.Array(topic);