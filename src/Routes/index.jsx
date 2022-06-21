import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { AnimatePresence } from "framer-motion";

export default function Routes({ user, setUser }) {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/home">
          <Home user={user} setUser={setUser} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
// user={user} setUser={setUser}
