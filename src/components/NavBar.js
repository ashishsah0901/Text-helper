import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <img className="mx-2" src="../../favicon.ico" height="25vw" alt="/" />
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.firstElement}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.secondElement}
                </a>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDark} />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
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
};

NavBar.defaultProps = {
  title: "Navbar title",
  firstElement: "element 1",
  secondElement: "element 2",
  mode: 'light'
};
