import {compose, withHandlers, withProps} from "recompose";
import { FORM_ERROR } from 'final-form';

import { routes } from "../../../routes/constants";

import * as Api from "../../../api/Api";

import RegisterSceneView from "./RegisterSceneView";


const enhancer = compose(
  withProps(
    () => ({
      buttonBackgroundColor: '#0089cf',
    })
  ),
  withHandlers({
    onSubmit: (props) => async (values) => {
      try {
        const res = await Api.Auth.register(values);

        Api.setToken(res.data.token);

        props.history.push(routes.login);
      } catch (e) {
        return {
          [FORM_ERROR]: 'User already registered!'
        };
      }
    }
  }),
);


export default enhancer(RegisterSceneView);