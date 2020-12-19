import React from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading"
import  NavBar  from "./components/nav-bar";
// new pages can be exported in pages/index.js and added below 
import { Home, Profile, ExternalApi } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
