import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import NavbarCustom from "./Pages/Navbar";
import Home from "./Pages/Home";
import ShowData from "./Pages/ShowData";

const RouteReact = () => {
  return (
    <Router>
      <NavbarCustom />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/ShowData">
          <ShowData />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouteReact;
