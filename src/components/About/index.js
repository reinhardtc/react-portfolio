import React from 'react';
import headShot from '../../assets/colin_headshot.JPG';

function About() {
  return (
    <section className="my-5">
      <h1 className="titles">About Me</h1>
      <hr></hr>
      <div id="container">
        <div className="img-text-box col">
          <div className="img-box col-lg-4">
            <img src={headShot} alt="Me" className="margin-block my-pic" />
          </div>
          <div className="my-2 margin-block col-lg-8">
            <p>
              Hi there! Welcome to my site. My name is Colin Reinhardt. I recently earned my full
              stack web development certificate from the coding bootcamp at the University of TX at
              Austin. Previously, I've worked in technology customer service for 10 years. I studied
              classical singing in College, but found that I also had a great interest in learning
              about new and exciting technology. If you have any questions about my experience,
              projects, or me, I'd love to hear from you!
            </p>
            <p>My Skills and Competencies</p>
            <ul className="bullets">
              <li>Teamwork and Communication</li>
              <li>Attention to detail</li>
              <li>Working knowledge of Agile project management methodology</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="boxes">
        <h3 className="titles">Technical Skills and Knowledge</h3>
        <ul>
          <li>
            <u>Programming Languages:</u> HTML, CSS, JavaScript
          </li>
          <li>
            <u>Database Management:</u> MySQL, Sequelize, MongoDB, Mongoose, NoSQL
          </li>
          <li>
            <u>Other Technologies:</u> jQuery, React.js, Express.js, Node.js, Heroku
          </li>
        </ul>
        {/* <a className="resume-button" href={myResume}>
					<button>Download my Resume</button>
				</a> */}
      </div>
    </section>
  );
}

export default About;
