const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: {type: String, required: true },
    eventTitle: { type: String, required: true},
    eventCity: { type: String, required: true},
    eventDate: { type: Date, default: Date.now},
    eventDescription: { type: String},
    eventLocation: { type: String},
    //eventPrice: { type: Number}
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;