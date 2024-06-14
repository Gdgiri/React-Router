import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-primary"
        style={{ padding: "15px 20px" }}
      >
        <div className="container-fluid">
          <img
            src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg"
            alt="Guvi"
            className="images"
            style={{ height: "40px" }}
          />
          <div className="vertical-line text-white"></div>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-black">
              <h1 className="fw-bold">|||</h1>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontSize: "14px" }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="blog">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-lg-5 me-0 mb-3 mb-lg-0 p-2"
                    type="search"
                    placeholder="What do you want to read"
                    aria-label="Search"
                  />
                  <button className="btn " type="submit"></button>
                </form>
              </li>

              <li className="nav-item down ">
                <NavLink to="/" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-ticket-detailed-fill"></i>
                    <span className="icon-letter">All</span>
                  </span>
                </NavLink>
              </li>

              <li className="nav-item down">
                <NavLink to="/fullstack" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-stack"></i>
                    <span className="icon-letter">Full-Stack Development</span>
                  </span>
                </NavLink>
              </li>

              <li className="nav-item down">
                <NavLink to="/datascience" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-clipboard2-data"></i>
                    <span className="icon-letter">Data Science</span>
                  </span>
                </NavLink>
              </li>

              <li className="nav-item down">
                <NavLink to="/cybersecurity" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-file-lock"></i>
                    <span className="icon-letter">Cyber Security</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item down">
                <NavLink to="/career" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-trophy"></i>
                    <span className="icon-letter">Career</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item down">
                <NavLink to="/course" activeClassName="active">
                  <span className="icon-container">
                    <i className="bi bi-book"></i>
                    <span className="icon-letter">Course</span>
                  </span>
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text">
              <button type="button" className="btn btn-success btndown">
                <span className="icon-container">
                  <i className="bi bi-box-arrow-right"></i>
                  <span className="icon-letter">Log Out</span>
                </span>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
