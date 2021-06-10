import React from "react";

export default function PopupLogin() {
  return (
    <div className="login-area">
      <div className="login-box">
        <a href="#">
          <i className="icofont icofont-close" />
        </a>
        <h2>LOGIN</h2>
        <form action="#">
          <h6>USERNAME OR EMAIL ADDRESS</h6>
          <input type="text" />
          <h6>PASSWORD</h6>
          <input type="text" />
          <div className="login-remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <div className="login-signup">
            <span>SIGNUP</span>
          </div>
          <a href="#" className="theme-btn">
            LOG IN
          </a>
          <span>Or Via Social</span>
          <div className="login-social">
            <a href="#">
              <i className="icofont icofont-social-facebook" />
            </a>
            <a href="#">
              <i className="icofont icofont-social-twitter" />
            </a>
            <a href="#">
              <i className="icofont icofont-social-linkedin" />
            </a>
            <a href="#">
              <i className="icofont icofont-social-google-plus" />
            </a>
            <a href="#">
              <i className="icofont icofont-camera" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
