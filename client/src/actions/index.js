import axios from 'axios';

// Redux name state
export const FETCH_NAME = 'fetch_name';
// Redux isFetched state
export const IS_REPO_FETCHED = 'is_repo_fetched';
export const REPO_FETCHED = 'repo_fetched';


/* name state ----------------------------------- */

// Return userName for Github repo
export let fetchName = function() {
  return {
    type: FETCH_NAME,
    payload: 'TannaciousXP'
  };
};

/* isFetched state ----------------------------------- */

// Return false for isRepoFetched
export let isRepoFetched = function() {
  return {
    type: IS_REPO_FETCHED,
    payload: false
  };
};

// Return true for repoFetched
export let repoFetched = function() {
  return {
    type: REPO_FETCHED,
    payload: true,
  };
};

/* ----------------------------------- */
