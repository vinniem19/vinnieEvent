const axios = require('axios');
const db = require('../models');
const key = process.env.token;
// defining methods for the event Controller

module.exports = {
    findAll: function(req, res) {
        const {query: params } = req;
        axios
        .get(`https://www.eventbriteapi.com/v3/events/search/?q=catholic&location.address=${params}&location.within=90mi&expand=event.venue.name&token=${key}`)
        .then(results =>
            results.data.events.filter(
                result =>
                
                result.name.text &&
                result.logo.url && //this is the image; some images are null
                result.start.local &&
                result.end.local &&
                result.description.text
            )).then(apiEvents =>
                db.Event.find().then(dbEvents =>
                    apiEvents.filter(apiEvent => 
                        // show the books where the api id is not equal to the db id
                        dbEvents.every(dbEvent => dbEvent.result.id !== apiEvent.id)
                        )
                        )
                        ).then(events => res.json(events))
                        .catch(err => res.status(422).json(err));
    },
    
    //findSavedEvents: function() {
    //again, we are finding saved events, 
    //then we are sending them as json back
    //findById(this._id).then((res) => {
     //   res.json()
    //})

    //}
};
