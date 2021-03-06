import axios from 'axios';
// const key = process.env.TOKEN;
export default {

    // Getting events from EventBrite api

    getEvents: function(q) {
     return axios.get('/api/ebapi', {params: {q} });
    },
    
    //get all saved events
    getSavedEvents: function() {
        return axios.get('/api/events');
    },

    // Deletes saved event with a given id
     deleteEvent: function(id) {
         return axios.delete('api/events/' + id);
     },

    // Saves an event to the db
     saveEvent: function (eventData) {
         return axios.post('/api/events', eventData);
     }
};