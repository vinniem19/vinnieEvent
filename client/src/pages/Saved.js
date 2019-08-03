import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import ImgCard from '../components/ImgCard';
import Card from '../components/Card';
import SavedEvents from '../components/savedEvents';
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
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Catholic Events Saved</h1>
                </div>
                
            </div>
            <div className='row'>
                <div className='col-md-12'>
                  <Card title='Saved Events'>
                      {this.state.events.length ? (
                         
                              this.state.events.map((event => (
                    <SavedEvents
                        eventId={event.eventId}
                        eventTitle={event.eventTitle}
                        eventImg={event.eventImg}
                        eventStart={event.eventStart}
                        eventEnd={event.eventEnd}
                        eventDescription={event.eventDescription}
                        key={event.eventId}
                        Button={() => (
                            <button
                            onClick={() => this.handleEventDelete(event.eventId)}
                            className='waves-effect waves-light btn'
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
