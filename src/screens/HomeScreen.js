import React from "react";
import FooterComponent from "../components/FooterComponent";
import Navbar from "../components/Navbar";
import Timebox from "../components/Timebox";
import "./Home.css";


function HomeScreen() {
  return (
    <>
      <div class="whole_page">
        <div class="landing_page">
          <Navbar />

          <div class="d-flex flex-column justify-content-center align-items-center caption extra-margin">
            <span class="pup p-absolute"></span>
            <span class="blu p-absolute"></span>
            <span class="org p-absolute"></span>
            <h1 class="light">
              SOMETHING AWESOME IS <br />
              COMING SOON
            </h1>
            <p>
              Your all-in-one affiliate marketing tracking software
              <span class="bold">
                track, automate and <br />
                optimise-
              </span>
               your campaigns
            </p>

            <div class="time-box-container">
              <Timebox number={7} text="Days" />
              <Timebox number={24} text="Hours" />
              <Timebox number={54} text="Minutes" />
              <Timebox number={11} text="Second" />
            </div>

            <form class="text-center">
              <input class="me-5" type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <div class="d-flex justify-content-between align-items-center">
                <input
                  class="ps-5"
                  type="text"
                  placeholder="Enter your email address.."
                />
                <button class="hover">JOIN OUR WAITING LIST</button>
              </div>
            </form>
          </div>
        </div>

        <FooterComponent imgg='1'/>
      </div>
    </>
  );
}

export default HomeScreen;
