import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import ImgCard from '../components/ImgCard';
import Card from '../components/Card';
import EventList from '../components/EventList';
import API from '../utils/API';

class Saved extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        this.getSavedEvents();
    }

    getSavedEvents = () => {
        API.getSavedEvents()
        .then(res =>
            this.setState({
                events: res.data
            })
            ).catch(err => console.log(err));
            console.log(this.state.events)
    };

    handleEventDelete = id => {
        API.deleteEvent(id).then(res => this.getSavedEvents());
    };

    render() {
        return(
            <div>
                <Header />
                <Navbar />
            <div class='row'>
                <div class='col-md-12'>
                    <h1>Catholic Events Saved</h1>
                </div>
                
            </div>
            <div class='row'>
                <div class='col-md-12'>
                  <Card title='Saved Events'>
                      {this.state.events.length ? (
                         
                              this.state.events.map((event => (
                    <EventList
                        eventId={event.id}
                        eventTitle={event.eventTitle}
                        eventImg={event.eventImg}
                        eventStart={event.eventStart}
                        eventEnd={event.eventEnd}
                        eventDescription={event.eventDescription}
                        key={event.id}
                        Button={() => (
                            <button
                            onClick={() => this.handleEventDelete(event.id)}
                            class='btn btn-danger ml-2'
                            >
                                Delete
                            </button>
                             )} 
                            />
                        ))
                        )) : (
                            <h2 className='text-center'>No Saved Events</h2>
                        )}
                      </Card>  
                </div>
            </div>
            </div>
        );
    }
}
export default Saved;
