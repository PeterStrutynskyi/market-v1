import { createAction } from 'redux-actions';
import * as constants from './usersConstants';

export const setCurrentUser = createAction(constants.SET_CURRENT_USER);
export const resetCurrentUser = createAction(constants.RESET_CURRENT_USER);