const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
// do I need to put routes here? I dont have that set up, yet.
 const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// DEFINING middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// for static assets (on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// again, probably should include this here
 app.use(routes);

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vceoevents", { useNewUrlParser: true } )

// start API server
app.listen(PORT, function() {
    console.log(`API server now listening on port: ${PORT}`);
    
});