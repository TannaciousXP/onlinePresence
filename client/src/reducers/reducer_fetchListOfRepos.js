import { FETCH_REPOS_LIST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
  case FETCH_REPOS_LIST:
    return action.payload;
  default:
    return state;
  }
}
