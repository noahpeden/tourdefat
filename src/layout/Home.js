import React, { Component } from 'react';
import Parade from '../assets/parade.png';

export default class Home extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const styles = {
			width: '50%',
			height: '200px'
		};
		return (
			<div>
				<h1>Tour de Fat Info!</h1>
				<iframe
					src="https://www.google.com/maps/d/u/0/embed?mid=18qU3uZNrfZDMEBuSRMMzNt8H9LI"
					width="640"
					height="480"
				/>
        <br/>
				<iframe
					src="https://www.google.com/maps/d/u/0/embed?mid=1ZxedkP0lEY70O0U-25--y88IzSc"
					width="440"
					height="480"
				/>
				<h1>Basic info about nonprofits</h1>
				<ul>
					<h2>Bike Fort Collins advocates for and leads:</h2>
					<li>
						Increased participation in active transportation: NoCo Bike Show,
						Bicycle Friendly Business program, Bike Share
					</li>
					<li>
						Safer streets and communities: SRTS, support more bicycle friendly
						infrastructure
					</li>
					<li>
						Inclusive culture and platform for all riders: Pathways to Health,
						Chain Reaction, KP neighborhood project
					</li>
				</ul>
				<ul>
					<h2>Overland Mountain Bike Club</h2>
					<li>
						"Tour de Fat support enables Overland Mountain Bike Club to pursue
						it's mission to promote the active, healthy sport of mountain biking
						by providing education and assistance to all trail users, and by
						working to build and maintain quality, sustainable trails that
						enhance the mountain biking experience. We ride, we connect and we
						contribute!"
					</li>
				</ul>
				<ul>
					<h2>Fort Collins Bycycle Co-op</h2>
					<li>
						The Fort Collins Bike Co-op strives to keep our community biking
						through educating people on fixing and maintaining their bikes,
						providing bikes to those not able to afford a bike, and keeping
						bikes out of the landfill. We also refurbish and donate bikes to
						charity events and programs. Tour de Fat has helped us put a roof
						over our heads in order to serve the community
					</li>
				</ul>
				<ul>
					<h2>Ciclismo Youth Foundation</h2>
					<li>
						The Tour de Fat enables the Ciclismo Youth Foundation to fulfill our
						mission of making cycling opportunities accessible to youth in
						Northern Colorado. Our youth cycling events and programs support the
						social and emotional development of children. We aim to teach
						children life skills by introducing children to cycling in a
						positive atmosphere that allows them the opportunity to grow and
						have fun.
					</li>
				</ul>


        <a>Link to Donate</a>
			</div>
		);
	}
}
