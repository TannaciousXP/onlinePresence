import { VIEW_MODAL } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case VIEW_MODAL:
    return action.payload;
  default:
    return state;
  }
}
