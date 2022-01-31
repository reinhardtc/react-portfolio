import React from 'react';

// import mealMatch from '../../assets/meal-match.png';
// import noteTaker from '../../assets/noteTaker.png';

function Portfolio() {
	return (
		<section>
			<div className="projectsHeader">
				<h1 className="projectsHeading">My Projects</h1>
			</div>
			<hr></hr>
			<div className="projectsContainer">
				<div className="projectBox mealMatch"></div>
				<div className="projectBox cleanest"></div>
				<div className="projectBox reactBudget"></div>
				<div className="projectBox noteTaker"></div>
			</div>
		</section>
	);
}

export default Portfolio;
