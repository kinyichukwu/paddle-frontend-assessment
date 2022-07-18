import React from "react";
import { Link } from "react-router-dom";
import "./BlogScreen.css";

function BlogScreen() {
  return (
    <div className="blogging">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link to="/home" className="navbar-brand">
            <img src="logo.jpeg" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navnew"></span>
            <span className="navnew"></span>
            <span className="navnew"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link to="/about" className="nav-Link active">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-Link" >
                  BLOG
                </Link>
              </li>
              <li className="nav-item btn_padding">
                <Link to="/ContactUsScreen" className="nav-Link hover">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="wraper">
        <div className="about-home white_color">
          <div className="background">
            <div className="smallBox"></div>
          </div>
          <div className="center">
            <h6>
              <span></span> ABOUT US
            </h6>
            <h1>Article and News</h1>
          </div>
        </div>

        <div className="latest-blog d-md-flex py-5 justify-content-center align-items-center">
          <div className="latest-blog-text py-2 ps-md-5">
            <h1>Latest From the Blog</h1>
            <p>
              Lorem ipsum dolor sit amet consecte,ciendis Link fugiat iure odio
              non expedita ullam, accusamus maiores! Quam molestias quaerat aut
              commodi suscipit?
            </p>
          </div>
          <div className="latest-blog-search ms-3">
            <input
              type="text"
              className="py-3 px-3"
              name=""
              placeholder="search here.."
              id=""
            />
            <i className="bx bx-search"></i>
          </div>
        </div>

        <div className="all-blog-items ">
          <div className="blog-article d-flex">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://th.bing.com/th/id/R.6f7492f0eff5fdd96db34105b94de473?rik=xR%2fSFcE7FEMe1g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_405187.png&ehk=04gNtDIg7ZTy8ThiHR%2b9%2fNU2nX6vPJyUTiFMNyhX1jM%3d&risl=&pid=ImgRaw&r=0"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">
                  12 Popup use Cases To Increase Conversions
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://th.bing.com/th/id/R.6f7492f0eff5fdd96db34105b94de473?rik=xR%2fSFcE7FEMe1g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_405187.png&ehk=04gNtDIg7ZTy8ThiHR%2b9%2fNU2nX6vPJyUTiFMNyhX1jM%3d&risl=&pid=ImgRaw&r=0"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">
                  12 Popup use Cases To Increase Conversions
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://th.bing.com/th/id/R.6f7492f0eff5fdd96db34105b94de473?rik=xR%2fSFcE7FEMe1g&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_405187.png&ehk=04gNtDIg7ZTy8ThiHR%2b9%2fNU2nX6vPJyUTiFMNyhX1jM%3d&risl=&pid=ImgRaw&r=0"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">
                  12 Popup use Cases To Increase Conversions
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="latest-blog d-md-flex py-5 justify-content-center align-items-center">
          <div className="latest-blog-text py-2 ps-md-5">
            <h1>Recent Articles</h1>
            <p>
              Lorem ipsum dolor sit amet consecte,ciendis Link fugiat iure odio
              non expedita ullam, accusamus maiores! Quam molestias quaerat aut
              commodi suscipit?
            </p>
          </div>
          <div className="latest-blog-search ms-3"></div>
        </div>

        <div className="all-blog-items d-flex">
          <div className="blog-article d-flex">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as Link natural lead-in to
                  additional content.
                </p>
                <Link to="#" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as Link natural lead-in to
                  additional content.
                </p>
                <Link to="/" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p>Thursday July 14, 2022</p>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as Link natural lead-in to
                  additional content.
                </p>
                <Link to="/" className="blog-button">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>

          <button>LOAD MORE</button>
        </div>

        <div className="question py-5">
          <div className="inner"></div>
          <div className="py-4 ps-3 max-width">
            <h1>Want To Know More About Metrics</h1>
            <p>Learn who we are and what drives us.</p>
            <Link to="/ContactUsScreen">
              Contact Us <img src="arrow.jpeg" alt="y" />
            </Link>
            <div className="outer"></div>
          </div>
        </div>
      </div>

      <div className="info-page-blog d-flex justify-content-center align-items-center flex-column pt-5">
        <div className="icons">
          <i className="me-3 ms-3 bx bxl-youtube"></i>
          <i className="me-3 bx bxl-facebook-circle"></i>
          <i className="me-3 bx bxl-instagram"></i>
          <i className="me-3 bx bxl-snapchat"></i>
          <i className="bx bxl-twitter"></i>
        </div>

        <div className="d-flex mx-auto  white_color ">
          <Link to="/TermsOfServiceScreen">
            <span className="mx-3">Terms of service</span>
          </Link>
          <Link to="/PrivacyPolicyScreen">
            <span>Privacy policy</span>
          </Link>
        </div>

        <p className="my-3">
          Copyright 2021 @Peddle Technologies. All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default BlogScreen;
