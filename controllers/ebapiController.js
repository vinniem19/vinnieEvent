const axios = require('axios');
//const db = require('../models');
const key = process.env.ebApiToken;



// defining methods for the event Controller

module.exports = {
    findAll: function(req, res) {
        const {q: city } = req.query;
        console.log(city);
        
        
        axios
        .get(`https://www.eventbriteapi.com/v3/events/search/?q=catholic&location.address=${city}&location.within=90mi&expand=event.venue.name&token=${key}`)
        .then(results =>{
          console.log(results);
           const place = results.data.events[0].venue_id;

          axios
          .get(`https://www.eventbriteapi.com/v3/venues/${place}/?token=${key}`)
          .then(venues => {
            console.log(venues.data.name)
            }).catch(err => res.status(422).json(err));

  // console.log(results.data.events[0].venue_id); this is what I want for another axios call to eventbrite api as get request for venue name info.
        
            return results.data.events.filter(
                result =>
                
                result.name.text &&
                //result.logo.url && //this is the image; some images are null
                result.start.local &&
                result.end.local &&
                result.description.text &&
                result.venue_id
                )
        }).
                then(events => res.json(events))
                .catch(err => res.status(422).json(err));
                
                // let place = results.data.event.venue_id;
               
                //  axios
                //  .get(`https://www.eventbriteapi.com/v3/venues/${place}&token=${key}`)
                //  .then(eventPlace => {
                //      console.log(eventPlace);
                  }
                };
    
    
    


