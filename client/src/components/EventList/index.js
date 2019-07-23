import React from 'react';
import './style.css';
import '../Search';

// import retreat from '../../images/retreat.jpg';


// class Card extends React.Component{
  function EventList(props) {
  
    return(
<div className="Container">
  <div className="row">
<div className="card horizontal" >
  <img className="card-img-top" src={props.eventImg} alt="eventLogo"></img>
  <div className="card-body">
    <h5 className="card-title">Title: {props.eventTitle}</h5>
     <button className="waves-effect waves-light btn" id="save-btn" onClick={() => props.handleEventSave(props.eventId)}>Save</button> 
    <p className="card-text">Start time: {props.eventStart}</p>
    <p className="card-text">End time: {props.eventEnd}</p>
    <p className="card-text">Description: {props.eventDescription}</p>
  </div>
</div>
</div>
</div>
        );
    
};

export default EventList;