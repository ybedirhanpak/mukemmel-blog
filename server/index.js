// Initialize doteenv library
require("dotenv").config();
const config = require("../src/config");
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

// This app object is used to redirect api calls into rendering next pages.
const app = next({ dev: config.IS_DEVELOPMENT });
//TODO learn what this handle function does.
const handle = app.getRequestHandler();

console.log("HELLO WORLD; DATABASE URL: ", config.DATABASE_URL);

//Connect mongodb database
mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then((response) => {
        console.log("Database connection established. ", response);
        console.log("DATABASE URL", config.DATABASE_URL);
    })
    .catch((error) => {
        console.log("Database connection error: ", error);
        console.log("DATABASE URL", config.DATABASE_URL);
    })

app
    .prepare()
    .then(() => {
        //Initialize express server
        const server = express();
        //Use middleware
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());

        //Include CORS
        server.use(cors({ origin: config.DOMAIN, credentials: true }))

        //Include post route
        const postRouter = require("./routes/posts.js");
        server.use("/api", postRouter);

        server.all('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(config.PORT, err => {
            if (err) throw err;
            console.log('App listening on PORT ', config.PORT);
            console.log(config.NODE_ENV);
            console.log('is development: ',config.IS_DEVELOPMENT);
            console.log(config.API_URL);
            console.log(config.DOMAIN);
            console.log(config.DATABASE_URL);
        })
    })