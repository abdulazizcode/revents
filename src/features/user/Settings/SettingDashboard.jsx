import React from "react";
import { Grid } from "semantic-ui-react";
import { Route, Redirect,Switch } from "react-router-dom";
import SettingNav from "./SettingNav";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotoPage from "./PhotoPage";
import AccountPage from "./AccountPage";

const SettingDashboard = () => {
	return (
		<Grid>
			<Grid.Column width={12}>
				<Switch>
					<Redirect exact from="/settings" to="/settings/basics" />
					<Route path="/settings/basics" component={BasicPage} />
					<Route path="/settings/about" component={AboutPage} />
					<Route path="/settings/photos" component={PhotoPage} />
					<Route path="/settings/account" component={AccountPage} />
				</Switch>
			</Grid.Column>

			<Grid.Column width={4}>
				<SettingNav />
			</Grid.Column>
		</Grid>
	);
};

export default SettingDashboard;
