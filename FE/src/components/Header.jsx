import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

export default function Header() {
  return (
    <div>
      {/* header section start */}
      <header className="header">
        <div className="container">
          <div className="header-area">
            <div className="logo">
              <NavLink to="/">
                <img src="assets/img/logo.png" alt="logo" />
              </NavLink>
            </div>
            <div className="header-right">
              <form action="#">
                <select>
                  <option value="Movies">Movies</option>
                  <option value="Movies">Movies</option>
                  <option value="Movies">Movies</option>
                </select>
                <input type="text" />
                <button>
                  <i className="icofont icofont-search" />
                </button>
              </form>
              <ul>
                <li>
                  <a href="#">Welcome Guest!</a>
                </li>
                <li>
                  <NavLink className="login-popup" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-area">
              <div className="responsive-menu" />
              <div className="mainmenu">
                <ul id="primary-menu">
                  <li>
                    <NavLink className="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/movie">Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/celebrities">CelebritiesList</NavLink>
                  </li>
                  <li>
                    <NavLink to="/top-movie">Top Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Pages <i className="icofont icofont-simple-down" />
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/blog-detail">Blog Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/movie-detail">Movie Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="theme-btn" href="#">
                      <i className="icofont icofont-ticket" /> Tickets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section end */}
    </div>
  );
}
