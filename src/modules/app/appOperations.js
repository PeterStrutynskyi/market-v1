import * as Api from "../../api/Api";
import * as actions from '../users/usersActions';


export function init() {
  return async dispatch => {
    try{
      Api.initApi();

      const res = await Api.User.getCurrent();

      dispatch(actions.setCurrentUser({
        user: res.data.user
      }))

    } catch (e) {
      Api.removeToken();
    }
  };
}