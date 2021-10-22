import "./App.css";
// import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import React, { useState } from 'react'
import Alert from "./components/Alert";

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
  const toggleMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode enabled", 'success')
    } else {
      setDarkMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", 'success')
    }
  }
  return (
    <>
      <NavBar title="Text-Helper" firstElement="Home" secondElement="About" mode={darkMode} toggleDark={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Form title="Enter text here to work on it..." alert={showAlert} result="Your text result" mode={darkMode} />
        {/* <About title="About text helper" mode={darkMode} /> */}
      </div>
    </>
  );
}

export default App;
