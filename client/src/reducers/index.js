import { combineReducers } from 'redux';

import userName from './reducer_name';
import FetchedRepo from './reducer_fetchRepo';

const rootReducer = combineReducers({
  userRepo: userName,
  fetchedRepo: FetchedRepo
});

export default rootReducer;

