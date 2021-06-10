import React from "react";

export default function MovieDetail() {
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
                <h1>Movie Detalied Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}
      {/* transformers area start */}
      <section className="transformers-area">
        <div className="container">
          <div className="transformers-box">
            <div className="row flexbox-center">
              <div className="col-lg-5 text-lg-left text-center">
                <div className="transformers-content">
                  <img src="assets/img/slide2.png" alt="about" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="transformers-content">
                  <h2>The Transformers</h2>
                  <p>3D | Animation | Action | Sci-Fi</p>
                  <ul>
                    <li>
                      <div className="transformers-left">Movie:</div>
                      <div className="transformers-right">
                        <a href="#">Sci-Fic</a>
                      </div>
                    </li>
                    <li>
                      <div className="transformers-left">Writer:</div>
                      <div className="transformers-right">
                        Stephen McFeely, Christopher Markus
                      </div>
                    </li>
                    <li>
                      <div className="transformers-left">Director:</div>
                      <div className="transformers-right">Joe Johnston</div>
                    </li>
                    <li>
                      <div className="transformers-left">Time:</div>
                      <div className="transformers-right">190m</div>
                    </li>
                    <li>
                      <div className="transformers-left">Release:</div>
                      <div className="transformers-right">2018-07-22</div>
                    </li>
                    <li>
                      <div className="transformers-left">Language:</div>
                      <div className="transformers-right">English, Russian</div>
                    </li>
                    <li>
                      <div className="transformers-left">Cinema:</div>
                      <div className="transformers-right">
                        HB Movies | HW Town{" "}
                        <a href="#" className="theme-btn">
                          Movies House
                        </a>
                        Grand Seats | HB Max
                        <div className="transformers-bottom">
                          <p>
                            May 19, 2018 <span>15h47</span>
                          </p>
                          <p>
                            May 19, 2018 <span>15h47</span>
                          </p>
                          <p>
                            May 19, 2018 <span>15h47</span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="transformers-left">Share:</div>
                      <div className="transformers-right">
                        <a href="#">
                          <i className="icofont icofont-social-facebook" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-twitter" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-social-google-plus" />
                        </a>
                        <a href="#">
                          <i className="icofont icofont-youtube-play" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="theme-btn">
              <i className="icofont icofont-ticket" /> BUY TICKET
            </a>
          </div>
        </div>
      </section>
      {/* transformers area end */}
      {/* details area start */}
      <section className="details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="details-content">
                <div className="details-overview">
                  <h2>Overview</h2>
                  <p>
                    Humans are at war with the Transformers, and Optimus Prime
                    is gone. The key to saving the future lies buried in the
                    secrets of the past and the hidden history of Transformers
                    on Earth. Now it's up to the unlikely alliance of inventor
                    Cade Yeager, Bumblebee, a n English lord and an Oxford
                    professor to save the world. Transformers: The Last Knight
                    has a deeper mythos and bigger spectacle than its
                    predecessors, yet still ends up being mostly hollow and
                    cacophonous. The first "Transformers" movie that could
                    actually be characterized as badass. Which isn't a bad
                    thing. It may, in fact, be better.
                  </p>
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
            <div className="col-lg-3 text-center text-lg-left">
              <div className="portfolio-sidebar">
                <img src="assets/img/sidebar/sidebar1.png" alt="sidebar" />
                <img src="assets/img/sidebar/sidebar2.png" alt="sidebar" />
                <img src="assets/img/sidebar/sidebar4.png" alt="sidebar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* details area end */}
    </div>
  );
}
