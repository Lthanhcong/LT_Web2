import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="img/slide1.png" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-ticket"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-trailer"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="img/slide2.png" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-ticket"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-trailer"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="img/slide3.png" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-ticket"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-trailer"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="img/slide4.jpg" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-ticket"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-trailer"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              John Doe{" "}
              <span className="job-title">
                Humans are at war with the Transformers
              </span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;

//... is called spread operator

//thanks for watching
//pleae subscribe my channel
