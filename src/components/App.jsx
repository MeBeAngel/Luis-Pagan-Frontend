import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MosPage from "../pages/MosPage";
import FormPage from "../pages/FormPage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App() {


  /////////////////////////// Write comment here later /////////////////////

  const [wasLoaded, setWasLoaded] = useState();

  useEffect(() => {
    if (!sessionStorage.getItem("wasLoaded")) {
      const body = document.body;
      const loader = document.getElementById("pre-loader");

      loader.style.display = "block";
      body.style.overflow = "hidden";

      setTimeout(function () {
        loader.style.display = "none";
        body.style.overflow = "visible";
      }, 3000);

      setWasLoaded(true);

      sessionStorage.setItem("wasLoaded", wasLoaded);
    }
    if (sessionStorage.wasLoaded) {
      setWasLoaded(sessionStorage.wasLoaded);
    }
  }, []);

  //////////////////////////////////////////////////////////////////////////


  

  return (
    <div>
      <div id="pre-loader"></div>

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
