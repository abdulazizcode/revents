import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export default class EventForm extends Component {
	state = {
		title: "",
		date:'',
		city:'',
		venue:'',
		hostedBy:''
	};

	componentDidMount(){
		if(this.props.selectedEvent !== null){
			this.setState({
				...this.props.selectedEvent
			})
		}
	}

	handleFormSubmit = (evt) => {
		evt.preventDefault();
		if(this.state.id){
			this.props.updateEvent(this.state)
		}else{
			this.props.createEvent(this.state);
		}
	};

	handleInputChange = (evt) =>{
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	render() {
		const { cancelFormOpen } = this.props;
		const { title,date,city,venue,hostedBy} = this.state;
		return (
			<Segment>
				<Form onSubmit={this.handleFormSubmit} autoComplete="off">
					<Form.Field>
						<label>Event Title</label>
						<input name="title" placeholder="Event Title" value={title} onChange={this.handleInputChange} />
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input  name="date" type="date" placeholder="Event Date"  value={date} onChange={this.handleInputChange}/>
					</Form.Field>

					<Form.Field>
						<label>City</label>
						<input name="city" placeholder="City event is taking place" value={city} onChange={this.handleInputChange} />
					</Form.Field>

					<Form.Field>
						<label>Venue</label>
						<input  name="venue" placeholder="Enter the Venue of the event" value={venue}  onChange={this.handleInputChange}/>
					</Form.Field>

					<Form.Field>
						<label>Hosted By</label>
						<input name="hostedBy"  placeholder="Enter the name of person hoisting" value={hostedBy} onChange={this.handleInputChange} />
					</Form.Field>

					<Button positive type="submit">
						Submit
					</Button>
					<Button onClick={cancelFormOpen} type="button">
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}
