import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  let mStyle = {
    color: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? "white" : "black",
  }
  let menuStyle = {
    width: "20px",
    height: "2px",
    backgroundColor: (props.mode === "Green" || props.mode === "Blue" || props.mode === "Black") ? "white" : "black",
    margin: "4px 0"
  }
  const fadeColor = (color) => {
    switch (color) {
      case "White":
        return "#ededed"
      case "Black":
        return "#616161"
      case "Blue":
        return "#5d6aff"
      case "Pink":
        return "#ffe0fb"
      case "Green":
        return "#2a993f"
      default:
        return "#ededed"
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: fadeColor(props.mode) }}>
        <div className="container-fluid">
          <img className="mx-2" src="../../favicon.ico" height="25vw" alt="/" />
          <Link className="navbar-brand" to="/" style={mStyle}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <div>
                <div style={menuStyle}></div>
                <div style={menuStyle}></div>
                <div style={menuStyle}></div>
              </div>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={() => props.changeTitle(props.firstElement)} style={mStyle}>
                  {props.firstElement}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/${props.secondElement}`} onClick={() => props.changeTitle(props.secondElement)} style={mStyle}>
                  {props.secondElement}
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-inline-flex p-2 bd-highlight form-check form-switch">
            <div onClick={() => props.toggleDark("Green")} className="mx-1" style={{ backgroundColor: "green", borderRadius: "50%", width: "1.5rem", height: "1.5rem", cursor: "pointer" }}>
            </div>
            <div onClick={() => props.toggleDark("Blue")} className="mx-1" style={{ backgroundColor: "blue", borderRadius: "50%", width: "1.5rem", height: "1.5rem", cursor: "pointer" }}>
            </div>
            <div onClick={() => props.toggleDark("Pink")} className="mx-1" style={{ backgroundColor: "pink", borderRadius: "50%", width: "1.5rem", height: "1.5rem", cursor: "pointer" }}>
            </div>
            <div onClick={() => props.toggleDark("White")} className="mx-1" style={{ backgroundColor: "white", borderRadius: "50%", width: "1.5rem", height: "1.5rem", cursor: "pointer" }}>
            </div>
            <div onClick={() => props.toggleDark("Black")} className="mx-1" style={{ backgroundColor: "black", borderRadius: "50%", width: "1.5rem", height: "1.5rem", cursor: "pointer" }}>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  firstElement: PropTypes.string.isRequired,
  secondElement: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleDark: PropTypes.func.isRequired,
  changeTitle: PropTypes.func,
};

NavBar.defaultProps = {
  title: "Navbar title",
  firstElement: "element 1",
  secondElement: "element 2",
  mode: 'light'
};
