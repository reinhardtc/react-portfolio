import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiHandlebarsdotjs, SiHeroku } from 'react-icons/si';

function Portfolio() {
	return (
		<section>
			<div className="projectsHeader">
				<h1 className="projectsHeading">My Projects</h1>
			</div>
			<hr></hr>
			<div className="projectsContainer">
				<div className="projectItem">
					<div className="projectBox mealMatch"></div>
					<h3>
						Meal Match <br />
						<IoLogoJavascript style={{ fontSize: '20px' }} />
						<FaHtml5 style={{ fontSize: '20px' }} /> <FaCss3 style={{ fontSize: '20px' }} />
					</h3>
					<a href="https://github.com/reinhardtc/meal_match" target={'_blank'} rel="noreferrer">
						<FaGithub style={{ fontSize: '20px' }} />
					</a>
					<a href="https://reinhardtc.github.io/meal_match/" target={'_blank'} rel="noreferrer">
						<FaExternalLinkAlt style={{ fontSize: '20px' }} />
					</a>
				</div>
				<div className="projectItem">
					<div className="projectBox cleanest"></div>
					<h3>
						cleaNest <br />
						<IoLogoJavascript style={{ fontSize: '20px' }} />
						<FaHtml5 style={{ fontSize: '20px' }} /> <FaCss3 style={{ fontSize: '20px' }} />
						<SiHandlebarsdotjs style={{ fontSize: '20px' }} /> <SiHeroku style={{ fontSize: '20px' }} />
					</h3>
					<a href="https://github.com/reinhardtc/cleaNest" target={'_blank'} rel="noreferrer">
						<FaGithub style={{ fontSize: '20px' }} />
					</a>
					<a href="https://nameless-basin-28220.herokuapp.com/" target={'_blank'} rel="noreferrer">
						<FaExternalLinkAlt style={{ fontSize: '20px' }} />
					</a>
				</div>
				<div className="projectItem">
					<div className="projectBox reactBudget"></div>
					<h3>
						Budget Tracker
						<br />
						<IoLogoJavascript style={{ fontSize: '20px' }} />
						<FaHtml5 style={{ fontSize: '20px' }} /> <FaCss3 style={{ fontSize: '20px' }} />
						<FaReact style={{ fontSize: '20px' }} />
					</h3>
					<a
						href="https://github.com/reinhardtc/react-budget-tracker"
						target={'_blank'}
						rel="noreferrer"
					>
						<FaGithub style={{ fontSize: '20px' }} />
					</a>
					<a
						href="https://reinhardtc.github.io/react-budget-tracker/"
						target={'_blank'}
						rel="noreferrer"
					>
						<FaExternalLinkAlt style={{ fontSize: '20px' }} />
					</a>
				</div>
				<div className="projectItem">
					<div className="projectBox noteTaker"></div>
					<h3>
						Note Taker
						<br />
						<IoLogoJavascript style={{ fontSize: '20px' }} />
						<FaHtml5 style={{ fontSize: '20px' }} /> <FaCss3 style={{ fontSize: '20px' }} />{' '}
						<SiHeroku style={{ fontSize: '20px' }} />
					</h3>
					<a href="https://take-note-of-it.herokuapp.com/" target={'_blank'} rel="noreferrer">
						<FaGithub style={{ fontSize: '20px' }} />
					</a>
					<a href="google.com">
						<FaExternalLinkAlt style={{ fontSize: '20px' }} />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
