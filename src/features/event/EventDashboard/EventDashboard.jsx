import React from "react";
import {Grid,Button} from 'semantic-ui-react'
import EventList from "../EventList/EventList"
import EventForm from "../EventForm/EventForm"
import cuid from "cuid"

const events = [
  {
    id: '1',
    title: 'Graduation Speech',
    date: '2021-03-27',
    category: 'education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Cyberjaya, TJ',
    venue: "Limkokwing University, Cyberjaya",
    hostedBy: 'Abdusamadzoda Abdulaziz',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'ReactJS Conf',
    date: '2021-03-28',
    category: 'development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Dushanbe, TJ',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Aziz Abdurasul',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

export default class EventDashboard extends React.Component {
  state ={
    events:events,
    isOpen:false,
    selectedEvent: null
  }




  handleCreateFormOpen = () =>{
    this.setState({
      isOpen:true,
      selectedEvent:null
    })
  }

  handleFormCancel = () =>{
    this.setState({
      isOpen:false
    })
  }


  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/images/user.png';
    this.setState({
      events: [...this.state.events, newEvent],
      isOpen:false
    })
  }

  handleSelectedEvent = (event) =>{
    this.setState({
      selectedEvent:event,
      isOpen:true
    })
  }

  handleUpdateEvent = (updatedEvent) =>{
    this.setState({
      events: events.map(event =>{
        if(event.id === updatedEvent.id){
          return {...updatedEvent}
        }else{
          return event
        }
      }),
      isOpen:false,
      selectedEvent:null
    })
  }

  handleDeleteEvent = (id) =>{
    this.setState({
      events: this.state.events.filter((t) => t.id !== id)
    })
  }


	render(){
    const {events, isOpen,selectedEvent} = this.state;
    if(this.state.events.length === 0){
      return <EmptyDashboard/>
    }
		return(
			<Grid divided='vertically'>
				<Grid.Column width={10}>
					<EventList events={events} selectEvent={this.handleSelectedEvent} deleteEvent={this.handleDeleteEvent}/>
				</Grid.Column>

				<Grid.Column width={6}>
					<Button onClick={this.handleCreateFormOpen} positive content='Create Event'></Button>
					{isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} cancelFormOpen={this.handleFormCancel}/>}
				</Grid.Column>
			</Grid>
		)
	}
}



const EmptyDashboard = () =>{
  return(
    <h1 style={{textAlign:"center"}}>NO EVENTS LEFT!!!</h1>
  )
}