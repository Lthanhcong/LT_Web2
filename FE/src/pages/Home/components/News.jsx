import React from "react";

export default function News() {
  return (
    <div>
      {/* news section start */}
      <section className="news">
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
        </div>
        <div className="news-slide-area">
          <div className="news-slider">
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
          <div className="news-thumb">
            <div className="news-next">
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
            <div className="news-prev">
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
            </div>
          </div>
        </div>
      </section>
      {/* news section end */}
    </div>
  );
}
