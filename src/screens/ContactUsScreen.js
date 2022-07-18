import React from "react";
import "./ContactUsScreen.css";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterComponent";
import { Link } from "react-router-dom";

function ContactUsScreen() {
  return (
    <>
    <Navbar/>
      <div className="contat-page d-flex">
        <div className="contat-page-left">
          <img src="contact-us-page-pic.jpeg" />
          <img src="contact-us-page-pic.jpeg" />
        </div>
        <div className="contat-page-right pt-5 ps-3">
        
        <div className="back-button">
        <Link to='/'>
        <img src="contactpage-arrow.com.jpeg" alt="" srcSet="" />
        </Link>
           
          </div>
          
          <div className="innerform">
            <h2 className="my-5 pt-2 text-center">
              Hey, we are still in the works, but you can send us a message!
            </h2>
            <div className="input-box my-4">
              <p>First name</p>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="input-box my-4">
              <p>Last name</p>
              <input type="text" placeholder="Enter your Last name" />
            </div>
            <div className="input-box my-4">
              <p>Email address</p>
              <input type="text" placeholder="Enter your Email address" />
            </div>
            <div className="input-box my-5 pt-2">
              <p>Tell Us What You Need Help With</p>
              <textarea
                name=""
                id=""
                rows="7.5"
                placeholder="Enter A Topic Like 'Channel Problems..."
                className="ps-4 pt-3"
              ></textarea>
            </div>

            <button>SEND NOW</button>
          </div>
        </div>
      </div>
      <FooterComponent color='1'/>
    </>
  );
}

export default ContactUsScreen;
