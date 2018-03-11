import { combineReducers } from 'redux';

import types from './types';

const initialState = {
  columns: [],
  length: 0
};

const columns = (state = initialState.columns, action) => {
  switch (action.type) {
    case types.CREATE_COLUMN:
      let newState = Array.from(state);
      newState[action.payload.column].push(action.payload.id);
      return newState;
    case 'DELETE_CARD':
      newState = Array.from(state);
      let col = newState[action.payload.column];
      let index = col.indexOf(action.payload.key);
      col.splice(index, 1);
      newState[action.payload.column] = col;
      return newState;
    default:
      return state;
  };
};

const length = (state = initialState.length, action) => {
  return state;
};

const reducer = combineReducers({
  columns,
  length
});

export default reducer;