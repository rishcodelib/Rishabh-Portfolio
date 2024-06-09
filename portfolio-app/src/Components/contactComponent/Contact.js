import React from "react";
import './contact.css';

function Contact() {
  return <div>
    <div class="container jumbotron">
      <div class="row ">
        <div class="col-md-12 text-center p-5">
          <h2 class="display-6"> Can I have your contact details ? </h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-4">
          <div class="pt-contact">
            <div class="pt-icon">
              <i class="fa fa-map-marker fa-2x" aria-hidden="true"> </i>
            </div>
            <div class="pt-content">
              <h6> Address</h6>

            </div>
          </div>
        </div>
        <div class="col-md-4 col-4">
          <div class="pt-contact">
            <div class="pt-icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="pt-content">
              <h6> Email ID</h6>

            </div>
          </div>
        </div>
        <div class="col-md-4 col-4">
          <div class="pt-contact">
            <div class="pt-icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="pt-content">
              <h6> Contact</h6>

            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <form >
            <div class="row">
              <div class="col-md-6">
                <label for="first-name">First Name: </label> <br />
                <input id="first-name" type="text" class="form-control" formControlName="firstName" />
              </div>
              <div class="col-md-6">
                <label for="last-name">Last Name: </label> <br />
                <input id="last-name" type="text" class="form-control" formControlName="lastName" />
              </div>
              <div class="col-md-6">
                <label for="email">Email: </label> <br />
                <input id="email" type="email" class="form-control" formControlName="email" />
              </div>

              <div class="col-md-6">
                <label for="contact">Contact: </label> <br />
                <input id="contact" type="number" class=" form-control" formControlName="contact" />
              </div>
              <div class="col-md-12 mt-2 text-center">
                {/* <!-- <p>Complete the form to enable button.</p> --> */}
                <button type=" submit" class="btn btn-secondary" >Submit</button>

              </div>

            </div>

          </form>
        </div>
      </div >
    </div >
  </div >
}

export default Contact;