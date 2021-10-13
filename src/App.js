import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="satyamtomar" />
          <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
