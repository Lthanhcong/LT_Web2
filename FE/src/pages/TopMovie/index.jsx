import React from "react";

export default function TopMovie() {
  return (
    <div>
      {/* Page loader */}
      <div id="preloader" />
      {/* breadcrumb area start */}
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-area-content">
                <h1>Top Movie Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      {/* portfolio section start */}
      <section className="portfolio-area pt-60">
        <div className="container">
          <div className="row flexbox-center">
            <div className="col-lg-6 text-center text-lg-left">
              <div className="section-title">
                <h1>
                  <i className="icofont icofont-movie" /> Spotlight This Month
                </h1>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="portfolio-menu">
                <ul>
                  <li data-filter="*" className="active">
                    Latest
                  </li>
                  <li data-filter=".soon">Comming Soon</li>
                  <li data-filter=".top">Top Rated</li>
                  <li data-filter=".released">Recently Released</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row portfolio-item">
            <div className="col-lg-3 col-md-4 col-sm-6 soon released">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio1.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>Boyz II Men</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 top">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio2.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>Tale of Revemge</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 soon">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio3.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>The Lost City of Z</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 top released">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio4.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>Beast Beauty</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 released">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio5.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>In The Fade</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 soon top">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio6.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>Last Hero</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 soon">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio3.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>The Lost City of Z</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 top released">
              <div className="single-portfolio">
                <div className="single-portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio4.png"
                    alt="portfolio"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h2>Beast Beauty</h2>
                  <div className="review">
                    <div className="author-review">
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                      <i className="icofont icofont-star" />
                    </div>
                    <h4>180k voters</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio section end */}
      {/* video section start */}
      <section className="video ptb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title pb-20">
                <h1>
                  <i className="icofont icofont-film" /> Trailers &amp; Videos
                </h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="video-slider mt-20">
                <div className="video-area">
                  <img src="assets/img/video/video2.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video3.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video4.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video5.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video2.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video3.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video4.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
                <div className="video-area">
                  <img src="assets/img/video/video5.png" alt="video" />
                  <a
                    href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                    className="popup-youtube"
                  >
                    <i className="icofont icofont-ui-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video section end */}
    </div>
  );
}
