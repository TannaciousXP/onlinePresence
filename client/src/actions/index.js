import axios from 'axios';

// Redux name state
export const FETCH_NAME = 'fetch_name';
// Redux isFetched state
export const IS_REPO_FETCHED = 'is_repo_fetched';
export const REPO_FETCHED = 'repo_fetched';
// Redux isModalOpen state
export const CLOSE_MODAL = 'close_modal';
export const SHOW_MODAL = 'show_modal';
// Redux viewModal state
export const VIEW_MODAL = 'view_modal';


/* userName state ----------------------------------- */

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

/* showModal state----------------------------------- */
// Return false closeModal
export let closeModal = function() {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};

// Return true for showModal
export let showModal = function() {
  return {
    type: SHOW_MODAL,
    payload: true
  };
};

/* viewModal state----------------------------------- */
export let viewModal = function(str) {
  return {
    type: VIEW_MODAL,
    payload: str,
  };
};

/* ----------------------------------- */
/* ----------------------------------- */
/* ----------------------------------- */
/* ----------------------------------- */
/* ----------------------------------- */
/* ----------------------------------- */

