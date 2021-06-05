import React from "react";
import Layout from "./components/layout/layout"
import{ BrowserRouter,Route,Switch,Redirect } from "react-router-dom";

import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/">
          <Layout/>
          </Route>
          {/* <Redirect path="*" to="/" /> */}

        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
