import { combineReducers } from 'redux';

import UserName from './reducer_name';
import FetchedRepo from './reducer_fetchRepo';
import ShowModal from './reducer_isModalOpen';

const rootReducer = combineReducers({
  userRepo: UserName,
  isFetched: FetchedRepo,
  isModalOpen: ShowModal,
});

export default rootReducer;

