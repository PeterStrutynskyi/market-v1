import { withProps, compose,  withHandlers } from "recompose";
import { connect } from "react-redux";
import { FORM_ERROR } from 'final-form';

import * as Api from "../../../api/Api";
import * as actions from "../../../modules/users/usersActions";

import LoginSceneView from "./LoginSceneView";



const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (data) => dispatch(actions.setCurrentUser({
    user: data
  }))
});

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps(
    ({ location }) => ({
      from: (location.state && location.state.from) || { pathname: '/' },
      buttonBackgroundColor: '#0089cf',
    })
  ),
  withHandlers({
    onSubmit: props => async (values) => {
      try {
        const res = await Api.Auth.login(values);

        Api.setToken(res.data.token);
        props.setCurrentUser(res.data.user);

        props.history.push(props.from);

      } catch (e) {
        return {
          [FORM_ERROR]: 'Wrong email or password'
        };
      }
    }
  }),
);


export default enhancer(LoginSceneView);