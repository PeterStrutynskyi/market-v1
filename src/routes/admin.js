import React from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "./constants";

import AddNewProduct from "../scenes/AddNewProduct/AddNewProductScene";
import AdminProductScene from "../scenes/AdminProduct/AdminProductScene";
import AdminScene from "../scenes/AdminMain/AdminMainSceneContainer";


const Admin = () => (
  <>
    <Switch>
      <Route
        exact
        path={ routes.admin }
        component={ AdminScene }
      />

      <Route
        exact
        path={ routes.adminProduct }
        component={ AdminProductScene }
      />

      <Route
        exact
        path={ routes.adminNewProduct }
        component={ AddNewProduct }
      />
    </Switch>
  </>
);

export default Admin;