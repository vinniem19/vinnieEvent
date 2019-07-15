import React, { Component } from 'react';
import axios from "axios";
import '../Events';
import EventList from '../EventList';
import retreat from '../../images/retreat.jpg';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            city: "",
            results: []
        }
    }
        
    handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;

        this.setState({
            city: value
        })
    };

    handleClick = event =>  {
    event.preventDefault();
        
    let Url = `https://www.eventbriteapi.com/v3/events/search/?q=catholic&location.address=${this.state.city}&location.within=90mi&expand=event.venue.name&token=7UXOKY2RMFCRDK7JHJ5F`;
          
          axios({
              url: Url,
              method: "GET"
          }).then((res) => {
                console.log(res);
                let eventsArray = res.data.events;
            
                this.setState({
                    results: eventsArray
                })
                console.log(this.state.results);
               // console.log("made it here");
            });
        };

    render() {
        return (
<div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Type a city for your search" id="city-search" name="city" value={this.state.city} type="text" onChange={this.handleInputChange}></input>

                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" id="event-btn" onClick={this.handleClick}>Submit
            </button>
                    </div>
                </form>
            </div>
            {this.state.results.map((eventDetails, eventId) => (
                    <EventList
                        eventId={eventDetails.id}
                        eventTitle={eventDetails.name.text}
                        eventImg={(eventDetails.logo === null) ? retreat : eventDetails.logo.url}
                        eventStart={eventDetails.start.local}
                        eventEnd={eventDetails.end.local}
                        eventDescription={eventDetails.description.text}
                        key={eventId}

                    />
                ))}
            </div>
        );
    };
};

