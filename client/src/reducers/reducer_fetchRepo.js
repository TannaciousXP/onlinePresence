import { IS_REPO_FETCHED, REPO_FETCHED } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case IS_REPO_FETCHED:
    return action.payload;
  case REPO_FETCHED:
    return action.payload;
  default:
    return state;
  }
}
