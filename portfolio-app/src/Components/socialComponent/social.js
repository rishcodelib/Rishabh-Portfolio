import React from "react";
import './social.css';
import { Link } from "react-router-dom";

function social() {
  return <div class="sc-media">
    <Link to="http://www.facbook.com/iam.rishabhhh" target="_blank" class="icon">
      <i class="fa fa-facebook"></i>
    </Link>
    <Link to="http://www.twitter.com/im_rishabhh" target="_blank" class="icon">
      <i class="fa fa-twitter"></i>
    </Link>
    <Link to="http://www.linkedin.com/in/iamrishabhh" target="_blank" class="icon">
      <i class="fa fa-linkedin"></i>
    </Link>
    <Link to="https://github.com/rishcodelib" target="_blank" class="icon">
      <i class="fa fa-github"></i>
    </Link>
  </div>;
}

export default social