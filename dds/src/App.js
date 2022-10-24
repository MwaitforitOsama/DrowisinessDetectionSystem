import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import { About, Home } from "./pages";
import { Routes } from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path={Routes.Home} element={<Home />} />
          <Route path={Routes.About} element={<About />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
