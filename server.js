const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
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

// telling middleware to use routes folder
 app.use(routes);

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://Vmiller19:Hello2019@ds211718.mlab.com:11718/heroku_0nm5sktp", { useNewUrlParser: true } )
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vceoevents", { useNewUrlParser: true } )

// start API server
app.listen(PORT, function() {
    console.log(`API server now listening on port: ${PORT}`);
    
});