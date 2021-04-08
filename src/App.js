//React
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//store
import { observer } from "mobx-react-lite";
import UserStore from "./store/User";
//pages
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
//components
import Navigation from "./components/Navbar/Navbar";

const App = observer(() => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => (UserStore.user ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/reg"
          render={() => (UserStore.user ? <Redirect to="/" /> : <Register />)}
        />
        <Route
          path="/lk"
          render={() =>
            UserStore.user ? <Profile /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </Router>
  );
});

export default App;
