import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { routes } from "./constants";
import * as Api from "../api/Api";

import AboutScene from "../scenes/About/AboutScene";
import CartScene from "../scenes/Cart/CartSceneContainer";
import ContactScene from "../scenes/Contact/ContactScene";
import HomeScene from "../scenes/Home/HomeSceneContainer";
import LoginScene from "../scenes/Authentication/Login/LoginSceneContainer";
import Modal from "../components/Modal/ModalContainer";
import NotFoundScene from "../scenes/NotFound/NotFoundScene";
import PrivacyPolicyScene from "../scenes/PrivacyPolicy/PrivacyPolicyScene";
import ProductScene from "../scenes/Product/ProductSceneContainer";
import RegisterScene from "../scenes/Authentication/Register/RegisterSceneContainer";
import RememberScene from "../scenes/Authentication/Rememder/RememberScene";
import TermsAndConditionsScene from "../scenes/TermsAndConditions/TermsAndConditionsScene";




const IsCurrentUser = ({component: Component, currentUser, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      if (!Api.isAuthenticated()) {

        if (Object.keys(currentUser).length === 0) {
          return <Component {...props} />;
        }

      } else {
        return <Redirect
          to={ routes.home }
        />
      }
    }}
  />
);


const Store = ({ location, history, currentUser }) =>  {


  let previousLocation = location;

    if (
      !previousLocation ||
      (history.action !== 'POP' &&
        (!location.state || !location.state.modal))
    ) {
      previousLocation = location;
    }

    const isModal = !!(
      location.state &&
      location.state.modal &&
      previousLocation !== location
    );

    return (
      <>
        <Switch location={isModal ? previousLocation : location}>
        <Route
          exact
          path={routes.home}
          component={ HomeScene }
        />

        <Route
          path={routes.singleProduct}
          component={ ProductScene }
        />

        <Route
          path={routes.cart}
          component={ CartScene }
        />

        <Route
          path={routes.about}
          component={ AboutScene }
        />

        <Route
          path={routes.contact}
          component={ ContactScene }
        />

        <Route
          path={routes.termsAndConditions}
          component={ TermsAndConditionsScene }
        />

        <Route
          path={routes.privacyPolicy}
          component={ PrivacyPolicyScene }
        />

        <IsCurrentUser
          path={routes.login}
          component={ LoginScene }
          currentUser={ currentUser }
        />

        <IsCurrentUser
          path={routes.register}
          component={ RegisterScene }
          currentUser={ currentUser }
        />

        <IsCurrentUser
          path={routes.restorePassword}
          component={ RememberScene }
          currentUser={ currentUser }
        />

        <Route
          component={ NotFoundScene }
        />
      </Switch>

      { isModal ?
        <Route
          path={ routes.cart }
          render={ props => (
            <Modal
              {...props}
              title='Cart'
            >
              <CartScene
                {...props}
              />
            </Modal>
          )}
        />
        :
        null
      }
    </>
    );
};

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
});


export default connect(mapStateToProps)(Store);
