import React from "react";
import {Menu,Container,Item,Button} from 'semantic-ui-react'

export default class NavBar extends React.Component {
	render(){
		return(
		<Menu inverted fixed="top">
	        <Container>
	            <Menu.Item header>
	            <img src="assets/logo.png" alt="logo" />
	                Re-vents
	            </Menu.Item>
	            <Menu.Item name="Events" />
		        <Menu.Item>
		            <Button floated="right" positive inverted content="Create Event" />
		        </Menu.Item>
		        <Menu.Item position="right">
		            <Button basic inverted content="Login" />
		            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
		        </Menu.Item>
	        </Container>
      </Menu>
		)
	}
}