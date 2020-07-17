import React from "react";
import SongOverview from "./SongOverview";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Aboutus" component={About} />
        <Route exact path="/" component={SongOverview} />
      </Switch>
    </div>
  );
}
export default App;
