import React,{Component,Fragment} from "react";
import EventListItem from "./EventListItem"
export default class EventList extends Component{
	render(){
		console.log(this.props.events);
		return(
			<Fragment>
				{this.props.events.map(event =>{
					return(
						<EventListItem key={event.id} event={event}/>
					)
				})}
			</Fragment>
		)
	}
}