import React from 'react';

import cleanest from '../../assets/cleanest.png';
// import mealMatch from '../../assets/meal-match.png';
// import myJober from '../../assets/myJober.png';
// import noteTaker from '../../assets/noteTaker.png';

function Portfolio() {
  return (
    <section>
      <div className="projectsHeader">
        <h1 className="projectsHeading">My Projects</h1>
      </div>
      <hr></hr>
      <div className="projectsContainer">
        <div className="projectBox cleanest">
          <image src={cleanest} alt="application photo" className="cleanestImage"></image>
        </div>
        <div className="projectBox mealMatch"></div>
        <div className="projectBox myJober"></div>
        <div className="projectBox noteTaker"></div>
      </div>
    </section>
  );
}

export default Portfolio;
