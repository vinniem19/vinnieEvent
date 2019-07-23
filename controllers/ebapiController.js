const axios = require('axios');
const db = require('../models');
const key = process.env.TOKEN;
// defining methods for the event Controller

module.exports = {
    findAll: function(req, res) {
        const {q: city } = req.query;
        console.log(city);
        axios
        .get(`https://www.eventbriteapi.com/v3/events/search/?q=catholic&location.address=${city}&location.within=90mi&expand=event.venue.name&token=${key}`)
        .then(results =>{
            console.log(results);
            
            return results.data.events.filter(
                result =>
                
                result.name.text &&
                //result.logo.url && //this is the image; some images are null
                result.start.local &&
                result.end.local &&
                result.description.text
            )}).
                then(events => res.json(events))
                .catch(err => res.status(422).json(err));
                // db.Event.find().then(dbEvents =>
                //     apiEvents.filter(apiEvent => 
                //         // show the books where the api id is not equal to the db id
                //         dbEvents.every(dbEvent => dbEvent.result.id !== apiEvent.id)
                //         )
                //         )
    },
    
    //findSavedEvents: function() {
    //again, we are finding saved events, 
    //then we are sending them as json back
    //findById(this._id).then((res) => {
     //   res.json()
    //})

    //}
};
