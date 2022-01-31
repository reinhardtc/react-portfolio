import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiHeroku, SiJavascript } from 'react-icons/si';

function Portfolio() {
	return (
		<section>
			<div className="projectsHeader">
				<h1 className="projectsHeading">My Projects</h1>
			</div>
			<hr></hr>
			<div className="projectsContainer">
				<div className="projectItem">
					<div className="projectImage mealMatch"></div>
					<h3>
						Meal Match <br />
						<SiJavascript style={{ fontSize: '25px' }} color="#323330" />
						<FaHtml5 style={{ fontSize: '25px' }} color="#F06529" />{' '}
						<FaCss3 style={{ fontSize: '25px' }} color="#3C99DC" />
					</h3>
					<p>
						Randomly choose a drink and meal pairing using 2 third party APIs. Save them to local storage
						for future reference.
					</p>
					<div>
						<a href="https://github.com/reinhardtc/meal_match" target={'_blank'} rel="noreferrer">
							<FaGithub style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
						<a href="https://reinhardtc.github.io/meal_match/" target={'_blank'} rel="noreferrer">
							<FaExternalLinkAlt style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
					</div>
				</div>
				<div className="projectItem">
					<div className="projectImage cleanest"></div>
					<h3>
						cleaNest <br />
						<SiJavascript style={{ fontSize: '25px' }} color="#323330" />
						<FaHtml5 style={{ fontSize: '25px' }} color="#F06529" />
						<FaCss3 style={{ fontSize: '25px' }} color="#3C99DC" />
						<SiHandlebarsdotjs style={{ fontSize: '25px' }} />
						<SiHeroku style={{ fontSize: '25px' }} color="#6762A6" />
					</h3>
					<p>
						A CRUD application allowing users to sign in, create, update and delete chores, as well as
						mark them complete and incomplete.
					</p>
					<div>
						<a href="https://github.com/reinhardtc/cleaNest" target={'_blank'} rel="noreferrer">
							<FaGithub style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
						<a href="https://nameless-basin-28220.herokuapp.com/" target={'_blank'} rel="noreferrer">
							<FaExternalLinkAlt style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
					</div>
				</div>
				<div className="projectItem">
					<div className="projectImage reactBudget"></div>
					<h3>
						Budget Tracker
						<br />
						<SiJavascript style={{ fontSize: '25px' }} color="#323330" />
						<FaHtml5 style={{ fontSize: '25px' }} color="#F06529" />{' '}
						<FaCss3 style={{ fontSize: '25px' }} color="#3C99DC" />
						<FaReact style={{ fontSize: '25px' }} color="#61dafb" />
					</h3>
					<p>
						An app built using React, allowing a user to create, update, and delete budgets and expenses.
						Uses local storage to manage state.
					</p>
					<div>
						<a
							href="https://github.com/reinhardtc/react-budget-tracker"
							target={'_blank'}
							rel="noreferrer"
						>
							<FaGithub style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
						<a
							href="https://reinhardtc.github.io/react-budget-tracker/"
							target={'_blank'}
							rel="noreferrer"
						>
							<FaExternalLinkAlt style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
					</div>
				</div>
				<div className="projectItem">
					<div className="projectImage noteTaker"></div>
					<h3>
						Note Taker
						<br />
						<SiJavascript style={{ fontSize: '25px' }} color="#323330" />
						<FaHtml5 style={{ fontSize: '25px' }} color="#F06529" />
						<FaCss3 style={{ fontSize: '25px' }} color="#3C99DC" />
						<SiHeroku style={{ fontSize: '25px' }} color="#6762A6" />
					</h3>
					<p>A CRUD application designed for taking quick notes, and save them to local storage.</p>
					<div>
						<a href="https://github.com/reinhardtc/take-a-note" target={'_blank'} rel="noreferrer">
							<FaGithub style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
						<a href="https://take-note-of-it.herokuapp.com/" target={'_blank'} rel="noreferrer">
							<FaExternalLinkAlt style={{ fontSize: '35px', padding: '0 5px' }} color="black" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
