// Initialize doteenv library
require("dotenv").config();
const config = require("../src/config");
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// This app object is used to redirect api calls into rendering next pages.
const app = next({ dev: config.IS_DEVELOPMENT });
//TODO learn what this handle function does.
const handle = app.getRequestHandler();

//Connect mongodb database
mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connection established. ");
    })
    .catch((error) => {
        console.log("Database connection error: ", error);
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

        const tagRouter = require("./routes/tags");
        server.use("/api", tagRouter);

        server.all('*', (req, res) => {
            return handle(req, res);
        })

        //Start server
        server.listen(config.PORT, err => {
            if (err) throw err;
            console.log(`### Server listening ### \n# DOMAIN: ${config.DOMAIN}\n# PORT: ${config.PORT}\n ###`);
        })
    })