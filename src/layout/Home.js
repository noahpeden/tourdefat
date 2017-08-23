import React, { Component } from 'react';
import Ciclismo from '../assets/ciclismo.jpg';
import Coop from '../assets/coop.jpg';
import Bike from '../assets/bike.jpg';
import Overland from '../assets/overland.jpg';
import Logo from '../assets/logo.png';

export default class Home extends Component {
	render() {
		const styles = {
			width: '50%',
			height: '200px'
		};
		return (
			<div>
				<header>
					<h1 className="title">Tour De Fat - Fort Collins</h1>
				</header>
				<h1 className="title">General Info Page</h1>
				<div className="donate">
					<h3>
						Do you love this event? Donate to your local cycling nonprofits NOW
					</h3>
					<form
						action="https://www.paypal.com/cgi-bin/webscr"
						method="post"
						target="_top"
					>
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input
							type="hidden"
							name="hosted_button_id"
							value="CSVNKX46QWXSG"
						/>
						<input
							className="donate-input"
							type="image"
							src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
							name="submit"
							alt="PayPal - The safer, easier way to pay online!"
						/>
						<img
							alt=""
							border="0"
							src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>
				</div>
				<ul className="schedule">
					<h2>Schedule of Events</h2>
					<li>
						10 am: Costumed Bike Parade (free!): Starting at Meldrum and Maple
						(see map below)
					</li>
					<li>
						1-3 pm: Pre-parties at local bars (no cover): Various locations in
						Old Town. (see map below)
					</li>
					<li>
						4-9 pm: Tour de Fat Concert featuring The All-American Rejects and X
						Ambassadors ($25): New Belgium Brewery at 500 Linden Street.{' '}
						<a href="https://www.eventbrite.com/e/the-all-american-rejects-x-ambassadors-at-fat-tire-tour-de-fat-fort-collins-tickets-32299578910">
							Buy Tickets HERE.
						</a>
					</li>
				</ul>
				<ul className="bike">
					<h2>Bike Fort Collins advocates for and leads:</h2>
					<img src={Bike} alt="Bike" />

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
				<ul className="overland">
					<h2>Overland Mountain Bike Club</h2>
					<img src={Overland} alt="Overland" />
					<div>
						"Tour de Fat support enables Overland Mountain Bike Club to pursue
						it's mission to promote the active, healthy sport of mountain biking
						by providing education and assistance to all trail users, and by
						working to build and maintain quality, sustainable trails that
						enhance the mountain biking experience. We ride, we connect and we
						contribute!"
					</div>
				</ul>
				<ul className="co-op">
					<h2>Fort Collins Bycycle Co-op</h2>
					<img src={Coop} alt="Coop" />
					<div>
						The Fort Collins Bike Co-op strives to keep our community biking
						through educating people on fixing and maintaining their bikes,
						providing bikes to those not able to afford a bike, and keeping
						bikes out of the landfill. We also refurbish and donate bikes to
						charity events and programs. Tour de Fat has helped us put a roof
						over our heads in order to serve the community
					</div>
				</ul>
				<ul className="bike">
					<h2>Ciclismo Youth Foundation</h2>
					<img src={Ciclismo} alt="Ciclismo" />
					<div>
						The Tour de Fat enables the Ciclismo Youth Foundation to fulfill our
						mission of making cycling opportunities accessible to youth in
						Northern Colorado. Our youth cycling events and programs support the
						social and emotional development of children. We aim to teach
						children life skills by introducing children to cycling in a
						positive atmosphere that allows them the opportunity to grow and
						have fun.
					</div>
				</ul>
				<h3>
					Take a look at the maps for info on the Parade Route and where you can
					find the Pre-Party Bars!
				</h3>
				<div className="map">
					<iframe
						src="https://www.google.com/maps/d/u/0/embed?mid=18qU3uZNrfZDMEBuSRMMzNt8H9LI"
						width="480"
						height="360"
					/>
					<iframe
						src="https://www.google.com/maps/d/u/0/embed?mid=1ZxedkP0lEY70O0U-25--y88IzSc"
						width="480"
						height="360"
					/>
				</div>
			</div>
		);
	}
}
