import React from 'react';
import headShot from '../../assets/colin_headshot.JPG';
function Home() {
  return (
    <section>
      <div className="hero">
        <h1 className="titles">
          <u>Colin Reinhardt</u>
        </h1>
        <hr></hr>
        <div className="img-box">
          <img src={headShot} alt="Me" className="my-pic" />
        </div>
        <h2 className="titles">Full Stack Web Developer based in Austin, TX</h2>
      </div>
    </section>
  );
}

export default Home;
