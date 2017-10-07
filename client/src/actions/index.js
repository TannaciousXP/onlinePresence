import axios from 'axios';

export const FETCH_NAME = 'fetch_name';

export let fetchName = function(a) {
  return {
    type: FETCH_NAME,
    payload: 'Peter X. Tan'
  };
};