import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
    </Switch>
  );
}
