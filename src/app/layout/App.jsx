import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route, Link } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";

import EventForm from "../../features/event/EventForm/EventForm";



class App extends React.Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Container className="main">
					<Route path="/" exact component={HomePage}/>
					<Route path="/events" component={EventDashboard}></Route>
					<Route path="/events/:id" component={EventDetailedPage}></Route>
					<Route path="/people" component={PeopleDashboard}></Route>
					<Route path="/profile/:id" component={UserDetailedPage}></Route>
					<Route path="/settings" component={SettingsDashboard}></Route>
					<Route path="/createEvent" component={EventForm}></Route>
				
				</Container>
			</Fragment>
		);
	}
}

export default App;



