import React from 'react'
import { Link } from 'react-router-dom'
import './FooterComponent.css'

function FooterComponent({imgg, color}) {
  return (
    <>
    <div class="info-page d-flex justify-content-center align-items-center flex-column pt-5" style={color && {backgroundColor:'#0D0124',}}>
    {imgg && <div class="transparent-circle-design"></div>}
    <div class="icons">
      <i class="me-3 ms-3 bx bxl-youtube"></i>
      <i class="me-3 bx bxl-facebook-circle"></i>
      <i class="me-3 bx bxl-instagram"></i>
      <i class="me-3 bx bxl-snapchat"></i>
      <i class="bx bxl-twitter"></i>
    </div>

    <div class="d-flex mx-auto  white_color ">
      <Link  to='/TermsOfServiceScreen'>
        <span class="mx-3">Terms of service</span>
      </Link>
      <Link to='/PrivacyPolicyScreen'>
        <span>Privacy policy</span>
      </Link>
    </div>

    <p class="my-3">
      Copyright 2021 @Peddle Technologies. All Right Reserved
    </p>
  </div>
    </>
  )
}

export default FooterComponent