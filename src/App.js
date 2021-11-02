import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
            
            <Route exact path="/login">
              <Login />
            </Route>
            
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
