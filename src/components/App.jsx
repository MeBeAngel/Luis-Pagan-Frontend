import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MosPage from "../pages/MosPage";
import FormPage from "../pages/FormPage";



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/MOS" component={MosPage} />
        <Route path="/Form" component={FormPage} />
      </Switch>
    </Router>
  );
}
