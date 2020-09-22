import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/util/Navbar";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/AboutMe";

import Blog from "./components/pages/blog/Blog";
import Post from "./components/pages/blog/Post";

import Projects from "./components/pages/projects/ProjectsMain";
import Greenprint from "./components/pages/projects/Greenprint";
import Civil411 from "./components/pages/projects/Civil411";
import TrackNGo from "./components/pages/projects/TrackNGo";
import Testament from "./components/pages/projects/Testament";
import BlackTechPhilly from "./components/pages/projects/BlackTechPhilly";

const AppRouter = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />

    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/:postId" component={Post} />

    <Route exact path="/projects" component={Projects} />
    <Route exact path="/greenprint" component={Greenprint} />
    <Route exact path="/civil411" component={Civil411} />
    <Route exact path="/trackngo" component={TrackNGo} />
    <Route exact path="/testament" component={Testament} />
    <Route exact path="/blacktechphilly" component={BlackTechPhilly} />
  </div>
);

export default AppRouter;
