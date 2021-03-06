import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Draw from './pages/draw'
import Home from './pages/home'
import Nav from './components/nav'
import SavedDrawing from './pages/savedDrawing'


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/draw">
          <Draw />
        </Route>
        <Route path="/savedDrawing">
          <SavedDrawing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
