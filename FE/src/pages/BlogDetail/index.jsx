import React from "react";

export default function BlogDetail() {
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
                <h1>Blog Details Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      {/* blog area start */}
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="news-details">
                <div className="single-news">
                  <div className="news-bg-1" />
                  <div className="news-date">
                    <h2>
                      <span>NOV</span> 25
                    </h2>
                    <h1>2017</h1>
                  </div>
                </div>
                <h2>Transformers: The Last Knight</h2>
                <a href="#">
                  <i className="icofont icofont-users" />
                  Animation, Movie, Action, Sci-Fi
                </a>
                <a href="#">
                  <i className="icofont icofont-comment" />
                  1k Comments
                </a>
                <p>
                  Humans are at war with the Transformers, and Optimus Prime is
                  gone. The key to saving the future lies buried in the secrets
                  of the past and the hidden history of Transformers on Earth.
                  Now it's up to the unlikely alliance of inventor Cade Yeager,
                  Bumblebee, an English lord and an Oxford professor to save the
                  world. Transformers: The Last Knight has a deeper mythos and
                  bigger spectacle than its predecessors, yet still ends up
                  being mostly hollow and cacophonous. The first "Transformers"
                  movie that could actually be characterized as badass. Which
                  isn't a bad thing. It may, in fact, be better.
                </p>
                <div className="detail-author">
                  <div className="row flexbox-center">
                    <div className="col-lg-6 text-lg-left text-center">
                      <div className="details-author">
                        <h4>By Admin:</h4>
                        <img src="assets/img/author.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 text-lg-right text-center">
                      <div className="details-author">
                        <h4>Share:</h4>
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-pinterest" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-linkedin" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img src="assets/img/blog-detail.png" alt="" />
                </div>
                <div className="details-reply">
                  <h2>Leave a Reply</h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="select-container">
                          <input type="text" placeholder="Name" />
                          <i className="icofont icofont-ui-user" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="select-container">
                          <input type="text" placeholder="Email" />
                          <i className="icofont icofont-envelope" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="select-container">
                          <input type="text" placeholder="Phone" />
                          <i className="icofont icofont-phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="textarea-container">
                          <textarea
                            placeholder="Type Here Message"
                            defaultValue={""}
                          />
                          <button>
                            <i className="icofont icofont-send-mail" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="details-comment">
                  <a className="theme-btn theme-btn2" href="#">
                    Post Comment
                  </a>
                  <p>
                    You may use these HTML tags and attributes: You may use
                    these HTML tags and attributes: You may use these HTML tags
                    and attributes:{" "}
                  </p>
                </div>
                <div className="details-thumb">
                  <div className="details-thumb-prev">
                    <div className="thumb-icon">
                      <i className="icofont icofont-simple-left" />
                    </div>
                    <div className="thumb-text">
                      <h4>Previous Post</h4>
                      <p>Standard Post With Gallery</p>
                    </div>
                  </div>
                  <div className="details-thumb-next">
                    <div className="thumb-text">
                      <h4>Next Post</h4>
                      <p>Standard Post With Preview Image</p>
                    </div>
                    <div className="thumb-icon">
                      <i className="icofont icofont-simple-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="blog-sidebar">
                <h4>Recent Posts</h4>
                <ul>
                  <li>
                    <a href="#">Transformers: The Last Knight</a>
                  </li>
                  <li>
                    <a href="#">
                      Duis aute irure dolor in reprehenderit in voluptate
                    </a>
                  </li>
                  <li>
                    <a href="#">Nostrud exercitation ullamco laboris</a>
                  </li>
                  <li>
                    <a href="#">Magnam aliquam quaerat voluptatem</a>
                  </li>
                  <li>
                    <a href="#">Magnam aliquam quaerat voluptatem</a>
                  </li>
                  <li>
                    <a href="#">Excepteur sint occaecat cupidatat proi</a>
                  </li>
                </ul>
                <h4>Recent Comments</h4>
                <ul>
                  <li>
                    <a href="#">admin on Justice League</a>
                  </li>
                  <li>
                    <a href="#">admin on Mask Man</a>
                  </li>
                  <li>
                    <a href="#">admin on Angle Pori</a>
                  </li>
                  <li>
                    <a href="#">admin on The Man</a>
                  </li>
                  <li>
                    <a href="#">admin on WP Devil</a>
                  </li>
                </ul>
                <h4>Categories</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Feature</a>
                  </li>
                  <li>
                    <a href="#">Media</a>
                  </li>
                  <li>
                    <a href="#">Movie</a>
                  </li>
                  <li>
                    <a href="#">Trailers_video</a>
                  </li>
                  <li>
                    <a href="#">Uncategorized</a>
                  </li>
                </ul>
                <h4>Archives</h4>
                <ul>
                  <li>
                    <a href="#">February 2018</a>
                  </li>
                  <li>
                    <a href="#">January 2018</a>
                  </li>
                  <li>
                    <a href="#">March 2018</a>
                  </li>
                  <li>
                    <a href="#">April 2018</a>
                  </li>
                </ul>
                <div className="portfolio-sidebar">
                  <img src="assets/img/sidebar/sidebar1.png" alt="sidebar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog area end */}
    </div>
  );
}
