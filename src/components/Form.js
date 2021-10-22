import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {
  const [text, setText] = useState("Enter your text...");
  const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnTextAreaContentChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnTextAreaContentChange} id="textBox" value={text} rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertToUppercase}>Convert to uppercase</button>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
};
