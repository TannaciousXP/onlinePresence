import { combineReducers } from 'redux';

import UserName from './reducer_name';
import FetchedRepo from './reducer_fetchRepo';
import ShowModal from './reducer_isModalOpen';
import ViewModal from './reducer_viewModal';

const rootReducer = combineReducers({
  userRepo: UserName,
  isFetched: FetchedRepo,
  isModalOpen: ShowModal,
  renderModal: ViewModal,
});

export default rootReducer;

