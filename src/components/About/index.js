import React from 'react';
import headShot from '../../assets/colin_headshot.JPG';

function About() {
  return (
    <section className="my-5">
      <h1 className="titles">About Me</h1>
      <hr></hr>
      <div id="bioContainer">
        <div>
          <div className="img-box">
            <img src={headShot} alt="Me" className="my-pic" />
          </div>
          <div className="bio">
            <p>
              Hi there!<br></br>
              <br></br> Welcome to my website. My name is Colin Reinhardt. I recently earned my full
              stack web development certificate from the coding bootcamp at the University of Texas
              at Austin. Previously, I've worked in technology customer service for over 10 years. I
              studied classical singing in College, but found that I also had a great interest in
              learning about new and exciting technology. If you have any questions about my
              experience, projects, or me, I'd love to hear from you. Cheers!
            </p>
          </div>
        </div>
      </div>
      <div className="skillBoxes">
        <h3 className="titles">Soft Skills and Competencies</h3>
        <ul className="bullets">
          <li>Teamwork and Communication</li>
          <li>Attention to detail</li>
          <li>Working knowledge of Agile project management methodology</li>
        </ul>
        <h3 className="titles">Technical Skills and Knowledge</h3>
        <ul className="bullets">
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
