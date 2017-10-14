import { combineReducers } from 'redux';

import NameReducer from './reducer_name';

const rootReducer = combineReducers({
  name: NameReducer,
});

export default rootReducer;

