import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
            <div class="container-fluid  white_color">
              <Link to="/" class="navbar-brand" href="#">
                <img src="logo.jpeg" alt="" />
              </Link>
              <button
                class="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                  <li class="nav-item">
                    <Link to='/about' class="nav-link active" aria-current="page" href="#">
                      ABOUT US
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/blog' class="nav-link" href="#">
                      BLOG
                    </Link>
                  </li>
                  <li class="nav-item btn_padding">
                    <Link to='/ContactUsScreen' class="nav-link hover" href="#">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
          </>
  )
}

export default Navbar