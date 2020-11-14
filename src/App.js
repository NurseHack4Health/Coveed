import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/sign-up.js";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </Switch>
  );
}

export default App;
