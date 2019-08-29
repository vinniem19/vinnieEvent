import React from 'react';
import './style.css';
import '../../pages/Saved.js'
import API from '../../utils/API'
import Moment from 'react-moment';
import 'moment-timezone';


// class Card extends React.Component{
  function SavedEvents(props) {
    
    let handleEventDelete = id => {
     API.deleteEvent(id).then(res => props.getSavedEvents());
     };
  
    
    return(
<div className="Container">
  <div className="row">
<div className="card horizontal" >
  <img className="card-img-top" src={props.eventImg} alt="eventLogo"></img>
  <div className="card-body">
    <h5 className="card-title">Title: {props.eventTitle}</h5>

       <button className="waves-effect waves-light btn" id="del-btn" onClick={() => handleEventDelete(props.eventId)}>Delete</button> 
       
       
    <p className="card-text">Date: <Moment format='ddd MM/DD/YYYY'>{props.eventStart}</Moment></p>
    <p className="card-text">Start time: <Moment format='hh:mm a'>{props.eventStart}</Moment></p>
    <p className="card-text">End time: <Moment format='hh:mm a'>{props.eventEnd}</Moment></p>
    {/*<p className="card-text">Place: {props.eventPlace}</p>*/}
    <p className="card-text">Description: {props.eventDescription}</p>
  </div>
</div>
</div>
</div>
        );
    
};

export default SavedEvents;