import { SHOW_MODAL, CLOSE_MODAL } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return action.payload;
  case CLOSE_MODAL:
    return action.payload;
  default:
    return state;
  }
}
