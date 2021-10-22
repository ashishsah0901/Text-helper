import "./App.css";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar title="Text-Helper" firstElement="Home" secondElement="About" />
      <div className="container my-3">
        <Form title="Enter text here to work on it..." />
      </div>
    </>
  );
}

export default App;
