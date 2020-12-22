//CSS
import './App.css';

//import react
import React from "react";
import { Route, Switch } from "react-router-dom";
//importing componenets
import Loading from "./components/Loading"
import  NavBar  from "./components/nav-bar";
import Footer from "./components/footer";
// new pages can be exported in pages/index.js and added below 
import { Home, Profile, ExternalApi } from "./pages";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100 page-container">
      <NavBar />
      <div className="flex-grow-1 content-wrap">
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

