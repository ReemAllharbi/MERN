import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import './bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/product">
            <Main />
          </Route>

          <Route exact path="/product/:id">
            <Detail />
          </Route>

          <Route exact path="/product/:id/edit">
            <Update />
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
