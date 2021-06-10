import React from "react";

export default function Blog() {
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
                <h1>Blog Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      {/* blog area start */}
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title pb-20">
                <h1>
                  <i className="icofont icofont-coffee-cup" /> Latest News
                </h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="single-news">
                <div className="news-bg-1" />
                <div className="news-date">
                  <h2>
                    <span>NOV</span> 25
                  </h2>
                  <h1>2017</h1>
                </div>
                <div className="news-content">
                  <h2>The Witch Queen</h2>
                  <p>
                    Witch Queen is a tall woman with a slim build. She has pink
                    hair, which is pulled up under her hat, and teal eyes.
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
              <div className="single-news">
                <div className="news-bg-2" />
                <div className="news-date">
                  <h2>
                    <span>NOV</span> 25
                  </h2>
                  <h1>2017</h1>
                </div>
                <div className="news-content">
                  <h2>The Witch Queen</h2>
                  <p>
                    Witch Queen is a tall woman with a slim build. She has pink
                    hair, which is pulled up under her hat, and teal eyes.
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
              <div className="single-news">
                <div className="news-bg-3" />
                <div className="news-date">
                  <h2>
                    <span>NOV</span> 25
                  </h2>
                  <h1>2017</h1>
                </div>
                <div className="news-content">
                  <h2>The Witch Queen</h2>
                  <p>
                    Witch Queen is a tall woman with a slim build. She has pink
                    hair, which is pulled up under her hat, and teal eyes.
                  </p>
                </div>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog area end */}
    </div>
  );
}
