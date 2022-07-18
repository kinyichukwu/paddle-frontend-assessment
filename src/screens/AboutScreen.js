import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/Navbar";
import "./AboutScreen.css";

function AboutScreen() {
  return (
    <>
      <Navbar />
      <div class="wraper">
        <div class="about-home white_color">
          <div class="background">
            <div class="smallBox"></div>
          </div>
          <div class="center">
            <h6>
              <span></span> ABOUT US
            </h6>
            <h1>
              Built for SaaS <br />
              and E-commerce
            </h1>
          </div>
          <div class="bottom me-5 pe-5">
            <p>
              Our tools are very easy to set up and use with a user <br />
              friendly dashboard that enables you to set up, <br />
              launch, automate and manage multi-affiliate <br />
              campaigns in 5 minutes.
            </p>
          </div>
        </div>

        <div class="comment white_color">
          <h1>
            Metricks was developed because just like you, we needed a product
            that could give us <b>good value.</b>
          </h1>
        </div>

        <div class="comments-e d-lg-flex white_color">
          <div class="why-us pt-5">
            <h5>
              <span>01</span> WHY US?
            </h5>
            <p class="pb-5 mb-5 mt-4">
              We pride ourselves in our ability to innovate and <br />
              create world-class tools that provide reliable and <br />
              efficient touchpoints between advertisers and <br />
              affiliates.
            </p>
            <div class="dots">
              <div class="d-flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="d-flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="d-flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="d-flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="d-flex">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div class="growing-with-you px-3 pt-5">
            <div class="inner"></div>
            <div class="ps-5">
              <div class="front">
                <h5 class="pt-2">
                  <span>02</span> GROWING WITH YOU
                </h5>
                <p class="pg1">
                  Leveraging the best technology, we hate developed an
                  all-in-one affiliate markeying tracking software, a genius
                  took to help you track, automate and optimize your influencer
                  campaigns,all from one dashboard.
                </p>
                <p class="pg2">
                  Our team of experts are constantly brainstorming, testing and
                  developing new solutions with only one thing in mind - your
                  business growth. Your success is our success and by giving you
                  the tool you need to scale, we grow as well.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="question py-5">
          <div class="inner"></div>
          <div class="py-4 ps-3 max-width">
            <h1>Got a Question?</h1>
            <p>
              See how Metricks can help your business grow with best affiliate
              marketing tracking software
            </p>
            <Link to="/ContactUsScreen">
              Contact Us <img src="arrow.jpeg" alt="y" />
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent color="1" />
    </>
  );
}

export default AboutScreen;
