import React from "react";
import Header from "./components/header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import CountryCase from "./components/country-case/CountryCase";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/:country" component={CountryCase} />
        <Route exact={true} path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
