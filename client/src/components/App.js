import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Login from "./Login";
import Location from "./Location";
import Receipes from "./Receipes";
import RestaurantDetails from "./RestaurantDetails";
import AllReceipes from "./AllReceipes";
import ReceipesResult from "./ReceipesResult";
import ReceipeDetails from "./ReceipeDetails";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { useContext } from "react";
import { FoodContext } from "./FoodContext";
import Restaurants from "./Restaurants";

const App = () => {
  const { user, setUser } = useContext(FoodContext);
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
          <Restaurants />
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
        <Route exact path="/receipe-details/:receipeId">
          <ReceipeDetails />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/profile">
          {localStorage.getItem("login") ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="">404: Oops!</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
