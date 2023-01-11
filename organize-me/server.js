const express = require('express');
const mongoose = require("mongoose");
const session = require("express-session");
const app = express(); //Creating express application

//DATABASE SETUP
mongoose.connect(
    "mongodb://localhost/o-m",
    {useNewUrlParser: true}
  );

//Package documentation - https://www.npmjs.com/pakcage/connect-mongo
const MongoStore = require("connect-mongo");





// app.use(session({
//     secret: 'foo',
//     store: MongoStore.create(options)
//   }));

  app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/organize-me/' })
  }));



//setting up database
const dbString = "mongodb://localhost:27017/organize-me/";
//options to run DB

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const connection = mongoose.createdConnection(dbString, dbOptions);

//JSON MIDDLEWARE FOR PARSING REQUESTS
app.use(express.join());
app.use(express.urlencoded({extended:true}));


// PROPERTIES RELATED TO THE EXPRESS SESSION MIDDLEWARE 
const sessionStore = new MongoStore ({
    mongooseConnection: connection,
    collection: "sessions"
});
    // configuration -- express-session resource: https://www.npmjs.com/package/express-session
    // here the session middleware is getting passed to the express instance, in which the opject 
        // being passed represents the options
    // Sesssion Store Implementation - represents iformation\\\ about a client/ user moving across the site - in which the databasae store the data
app.use(session({
    secret: "some secret",
    resave: false,
    saveUnitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 // equating to equal one full day
    }
}));



app.get("/", (req, res, next) =>{
    res.send("<h2>live from 3000!</h2>")
})

app.listen(3001, ()=>{
   console.log("Server running on 3001");
});