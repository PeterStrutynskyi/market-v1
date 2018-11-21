import { handleActions } from 'redux-actions';
import * as constants from './usersConstants';

const initialState = {
  currentUser: {},
};

export default handleActions(
  {
    [constants.SET_CURRENT_USER]: (state, action) => ({
      ...state,
      currentUser: action.payload.user,
    }),
    [constants.RESET_CURRENT_USER]: (state, action) => ({
      ...state,
      currentUser: {},
    }),
  },
  initialState,
);
