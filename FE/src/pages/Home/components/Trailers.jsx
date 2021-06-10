import React from "react";

export default function Trailers() {
  return (
    <div>
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
            <div className="col-md-9">
              <div className="video-area">
                <img src="assets/img/video/video1.png" alt="video" />
                <a
                  href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                  className="popup-youtube"
                >
                  <i className="icofont icofont-ui-play" />
                </a>
                <div className="video-text">
                  <h2>Angle of Death</h2>
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
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  <div className="video-area">
                    <img src="assets/img/video/video2.png" alt="video" />
                    <a
                      href="https://www.youtube.com/watch?v=RZXnugbhw_4"
                      className="popup-youtube"
                    >
                      <i className="icofont icofont-ui-play" />
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6">
                  <div className="video-area">
                    <img src="assets/img/video/video3.png" alt="video" />
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
        </div>
      </section>
      {/* video section end */}
    </div>
  );
}
