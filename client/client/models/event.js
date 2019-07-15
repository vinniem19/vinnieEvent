const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventCity: { type: String, required: true},
    eventName: { type: String, required: true},
    eventDate: { type: Date: default: Date.now},
    eventLocation: { type: String},
    eventPrice: { type: Number}
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;