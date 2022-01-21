import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
      <h3 className="titles">Let's talk!</h3>
      <div className="contactInfo">
        <a className="contacts" href="tel:+8604599777">
          860-459-9777
        </a>
        <a className="contacts" href="mailto:reinhardtc22@gmail.com">
          reinhardtc22@gmail.com
        </a>
      </div>
      <div className="social-links">
        <SocialIcon
          className="linkedin"
          url="https://www.linkedin.com/in/colinreinhardt/"
          target="_blank"
        />
        <SocialIcon className="github" url="https://github.com/reinhardtc" target="_blank" />
      </div>
    </footer>
  );
}

export default Footer;
