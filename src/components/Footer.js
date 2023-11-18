import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerItems">
        <div className="address">
          <h4>Contact</h4>
          <p>Sarajevska bb, Gradačac 76250, Bosna i Hercegovina</p>
          <p>+387 (0)61 896 741</p>
        </div>
        <div className="title">
          <h1> - SDelivery - </h1>
          <div className="socialMedia">
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
          </div>
        </div>
        <div className="workTime">
          <h4>Hours</h4>
          <p>
            Monday to Thursday & Sunday 8:30am - 10pm <br></br>
            Fri. & Sat. 8:30am - 11pm <br></br>
            Monday to Sunday: <br></br>
            Brunch 8:30 - 3:30 <br></br>
            Afternoon Offerings 3:30pm - 4:30pm <br></br>
            Dinner starts at 5pm
          </p>
        </div>
      </div>
      <div>
        <p className="copyright"> &copy; 2023 SDelivery</p>
      </div>
    </div>
  );
}

export default Footer;
