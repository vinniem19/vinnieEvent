const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: {type: String, required: true },
    eventTitle: { type: String, required: true},
    eventImg: { type: String},
    eventStart: { type: Date, default: Date.now},
    eventEnd: { type: Date, default: Date.now},
    eventDescription: { type: String},
    
    //eventPrice: { type: Number}
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;