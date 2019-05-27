import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from './header'
import Footer from './footer'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
          <Header />
          <div>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about-me" exact component={AboutMe}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/contact" exact component={Contact}/>
          </div>
           <Footer />
    </BrowserRouter>
    );
  }
}

export default App;
