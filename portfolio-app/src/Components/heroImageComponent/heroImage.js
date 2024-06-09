import React from 'react';
import Social from '../socialComponent/social.js'
import './heroImage.css';

// import image from '../../Assets/images/background.jpeg'

function heroImage() {
  return <section class='heroImage'>
    <div class="masterContent">
      <div class="user_image">
      </div>
      <div class="row ">
        <div class="col-md-12">
          <div class="headText ">
            <h1 class="greetings"> Hello, I'm </h1>
            <h1 class="name caveat">
              Rishabh Aggarwal
            </h1>
            <div class="auto-typer">
              <span class="typer typer-style" id="main" data-words="Web Developer,Web Designer" data-delay="100"
                data-deleteDelay="1000"></span>
              <span class="cursor" data-owner="main"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Social />
  </section >

}

export default heroImage;