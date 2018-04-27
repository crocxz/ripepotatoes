import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";
import Hero from "./Landing/Hero";
import Home from "./TitleLists/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="Page">
        <div className="Landing">
        <Header />
        <Hero />
        </div>
        <div className="Body">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search/' component={Main} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route component={NotFound} />
        </ Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;