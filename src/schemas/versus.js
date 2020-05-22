import { schema } from 'normalizr';


export const versus = new schema.Entity(
  'versuses',
);
export const versuses = new schema.Array(versus);