import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductsList from "../screens/ProductsList/ProductsListPage";
import ProductDetails from "../screens/ProductDetails/ProductsDetailsPage";
import Error from "../screens/Error/Error";
import MainHeader from "../components/Header/HeaderComponent";

function MainRoute() {
  return (
    <div>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/product/:ProductId" component={ProductDetails} />
          <Route component={Error} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default MainRoute;
