import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
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
