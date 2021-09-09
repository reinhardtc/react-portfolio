import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <SocialIcon url="https://www.linkedin.com/in/colinreinhardt/" target="_blank" />
        <SocialIcon url="https://github.com/reinhardtc" target="_blank" />
      </div>
    </footer>
  );
}

export default Footer;
