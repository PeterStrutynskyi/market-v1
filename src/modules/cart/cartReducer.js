import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [constants.ADD]: (state, action) => ({
      ...state,
      items: [action.payload.id].concat(state.items),
      // items: [...state.items, {
      //   id: action.payload.id,
      //   count: 1
      // }]
    }),
    [constants.REMOVE]: (state, action) => ({
      ...state,
      items: state.items.filter((id) => id !== action.payload.id),
    }),
  },
  initialState,
);
