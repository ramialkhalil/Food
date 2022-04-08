import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Login from "./Login";
import Location from "./Location";
import Receipes from "./Receipes";
import Restaurant from "./Restaurant";
import RestaurantDetails from "./RestaurantDetails";
import AllReceipes from "./AllReceipes";
import ReceipesResult from "./ReceipesResult";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact default path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/find-location">
          <Location />
        </Route>
        <Route exact path="/find-restaurant/:locationId">
          <Restaurant />
        </Route>
        <Route exact path="/find-restaurant/:locationId/:restaurantId">
          <RestaurantDetails />
        </Route>
        <Route exact path="/find-receipes/:ingredient">
          <AllReceipes />
        </Route>
        <Route exact path="/receipes/:ingredient">
          <ReceipesResult />
        </Route>
        <Route path="">404: Oops!</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
