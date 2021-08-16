import { React } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MosPage from "../pages/MosPage";
import FormPage from "../pages/FormPage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App() {



  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/MOS" component={MosPage} />
        <Route path="/Form" component={FormPage} />
      </Switch>

      <Footer />
    </div>
  );
}
