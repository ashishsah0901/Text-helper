import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Form(props) {
  let mStyle = {
    color: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? "white" : "black"
  }
  const [text, setText] = useState("");
  const convertToUppercase = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.alert && props.alert("Converted to uppercase", 'success')
    }
  }
  const convertToLowercase = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.alert && props.alert("Converted to lowercase", 'success')
    }
  }
  const clearText = () => {
    setText("");
    props.alert && props.alert("Text cleared", 'success')
  }
  const removeExtraSpaces = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let newText = text.trim().split(" ").filter(i => i !== "").join(" ")
      setText(newText);
      props.alert && props.alert("Extra spaces removed", 'success')
    }
  }
  const copyToClipBoard = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      navigator.clipboard.writeText(text)
      props.alert && props.alert("Copied to clipboard", 'success')
    }
  }
  const makeTextInOneLine = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let newText = text.trim().replaceAll("\n", " ");
      setText(newText);
      props.alert && props.alert("Removed new lines", 'success')
    }
  }
  const handleOnTextAreaContentChange = (event) => {
    setText(event.target.value);
  }
  const extractEmail = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      if (newText == null) {
        props.alert && props.alert("No email fount", 'danger')
      } else {
        setText(newText.join("\n"));
        props.alert && props.alert("Emails extracted", 'success')
      }
    }
  }
  const convertToParagraph = () => {
    if (text.trim() === "") {
      props.alert && props.alert("Enter some text", 'warning')
    } else {
      let nextText = text.trim().replaceAll(".", "\n");
      setText(nextText)
      props.alert && props.alert("Converted to paragraphs", 'success')
    }
  }
  return (
    <>
      <div className="container my-3" style={mStyle}>
        <h3>{props.title}</h3>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnTextAreaContentChange} id="textBox" value={text} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToUppercase}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToLowercase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyToClipBoard}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={makeTextInOneLine}>Make text in one line</button>
        <button className="btn btn-primary mx-1 my-1" onClick={extractEmail}>Extract email</button>
        <button className="btn btn-primary mx-1 my-1" onClick={convertToParagraph}>Make new line after full stop</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
      </div>
      <div className="container my-3" style={mStyle}>
        <h3>{props.result}</h3>
        <p>There are {text.trim().split(/\s+/).filter(i => i !== "").length} words and {text.trim().split(/\s+/).filter(i => i !== "").join("").length} characters in {text.trim()}</p>
        <p>Approximately {text === "" ? 0 : Math.ceil(0.008 * text.trim().replaceAll("\n", " ").split(" ").filter(i => i !== "").length)} minutes read</p>
      </div>
    </>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  alert: PropTypes.func,
};
