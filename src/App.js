import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleTitle = (page) => {
    document.title = `Text-Helper - ${page}`
  }
  const toggleMode = (color) => {
    setDarkMode(color)
    document.body.style.backgroundColor = color
    showAlert(`${color} mode enabled`, 'success')
  }
  return (
    <>
      <Router>
        <NavBar title="Text-Helper" firstElement="Home" secondElement="About" mode={darkMode} toggleDark={toggleMode} changeTitle={toggleTitle} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/About">
              <About title="About text helper" mode={darkMode} />
            </Route>
            <Route exact path="/">
              <Form title="Enter text here to work on it..." alert={showAlert} result="Your text result" mode={darkMode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
