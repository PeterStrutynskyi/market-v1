import React from 'react';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from './constants'

import * as Api from "../api/Api";

import Admin from "./admin";
import Store from "./public";

import Header from "../components/Header/HeaderContainer";
import NotFoundScene from "../scenes/NotFound/NotFoundScene";


const ProtectedRoute = ({component: Component, userRole, ...rest}) => (
  <Route
    {...rest}

    render={props => {
      if (Api.isAuthenticated()) {
        if (userRole === 'admin') return <Component {...props} />;
        else return <NotFoundScene/>
      } else {
        return <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      }
    }}
  />
);


const App = ({
   currentUserRole,
}) => (
  <>
    <Header />
    <Switch>
      <ProtectedRoute
        path={routes.admin}
        component={Admin}
        userRole={currentUserRole}
      />
      <Route
        path={routes.home}
        component={Store}
      />
      <Route
        path="*"
        component={NotFoundScene}
      />
    </Switch>
  </>
);


const mapStateToProps = (state) => ({
  currentUserRole: 'admin'//state.users.currentUser.role
});


export default connect(mapStateToProps)(App);

