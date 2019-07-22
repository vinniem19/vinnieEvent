import React, { Component } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import '../Events';
import EventList from '../EventList';
import retreat from '../../images/retreat.jpg';
import API from '../../utils/API';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            q: "",
            results: []
        }
    }
        
    handleInputChange = (event) => {
        event.preventDefault();
        let value = event.target.value;

        this.setState({
            q: value
        })
    };

    getEvents = () => {
        API.getEvents(this.state.q)
        .then(res => 
            this.setState({
                results: res.data.events
            })
            ).catch(() =>
            this.setState({
                results: [],
                message: "No new events found"
            })
            );
        };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getEvents();
    };

    handleEventSave = id => {
        console.log("Clicked Save btn");
        
        const event = this.state.events.find(event => event.id === id);
    API.saveEvent({
                        eventId:event.id,
                        eventTitle: event.name.text,
                        eventImg: (event.logo === null) ? retreat : event.logo.url,
                        eventStart: event.start.local,
                        eventEnd: event.end.local,
                        eventDescription: event.description.text
            }).then(() => this.getEvents());
    };


    render() {
        return (
<div>
    <Header />
    <Navbar />
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                            placeholder="Type a city for your search" 
                            id="city-search" 
                            name="q" 
                            value={this.state.q} 
                            type="text" 
                            onChange={this.handleInputChange}></input>

                        </div>
                    </div>
                    <div className="row">
                        <button 
                        className="btn waves-effect waves-light" 
                        id="event-btn" 
                        onClick={this.handleFormSubmit}>Submit
            </button>
        </div>
    </form>
    </div>
            {this.state.results.map(event => (
                    <EventList
                        eventId={event.id}
                        eventTitle={event.name.text}
                        eventImg={(event.logo === null) ? retreat : event.logo.url}
                        eventStart={event.start.local}
                        eventEnd={event.end.local}
                        eventDescription={event.description.text}
                        key={event.id}
                        handleEventSave={this.handleEventSave(this.id)}
                        
                          />
            ))}
            </div>
        );
    };
};

