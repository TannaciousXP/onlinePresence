import { FETCH_REPOS_LIST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
  case FETCH_REPOS_LIST:
    return action.payload.data;
  default:
    return state;
  }
}
