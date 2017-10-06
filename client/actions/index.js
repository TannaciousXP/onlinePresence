export const FETCH_NAME = 'fetch_name';

export let fetchName = function() {
  return {
    type: FETCH_NAME,
    payload: 'Peter X. Tan'
  };
};