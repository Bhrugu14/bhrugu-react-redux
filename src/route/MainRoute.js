import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import AntRegister from "../screens/ant registr/AntRegister";
import ProductsList from "../screens/ProductsList/ProductsListPage";
import ProductDetails from "../screens/ProductDetails/ProductsDetailsPage";
import MainHeader from "../components/Header/HeaderComponent";

function MainRoute() {
  // const loginData = localStorage.getItem("login");
  return (
    <div>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={ProductsList} />
          {/* <Route exact path="/login" component={AntRegister} /> */}
          <Route exact path="/product/:ProductId" component={ProductDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default MainRoute;
