import React from "react";
import "./about.css";

function about() {
  return <section class="about-me " id="about">
    <div class="container">
      {/* <!-- <hr class="sc-content"> --> */}
      <div class="row">
        <div class="col-md-12">
          <div class="sc-head ">
            <div class="Heading display-1">
              About Me
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        {/* <!-- <div class="col-md-4 ">
					<div class="usr-img ">
						<img src="./assets/images/no_image.png" class="img-thumbnail ">
					</div>
				</div> --> */}
        <div class="col-md-12">
          <div class="sc-Head">
            <div class="sub-Heading mb-1">
              Software Developement Engineer
            </div>
          </div>
          <div class="sub-Content">
            <p class="mb-0"> I am a Full Stack Developer presently working in <a class="company"
              href="https://www.lumen.com">Lumen
              Technologies</a> as Software Developent Engineer-I.I am passionate for programing & new emerging
              technologies. </p>
            <p> With 5+ Years of experience in IT-Industry. I have developed numerous Web-Application & Websites for the
              different clients. I am presently located in Bengaluru, Karnataka. </p>
          </div>
          <div class="row">
            <div class="col-md-8">
              <app-skill-bar></app-skill-bar>
            </div>
            <div class="col-md-4 pt-5">
              <a class="btn btn-primary mx-2 " href="/resume"> Request Resume</a>
              <a class="btn btn-secondary " href="/projects"> Project Catalog</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <i class="fa fa-leetcode" aria-hidden="true"></i>
  </section>
}


export default about 