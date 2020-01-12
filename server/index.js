const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require("cors");

//Get port
const port = process.env.PORT || 3000;
//Check if application is on production
const dev = process.env.NODE_ENV !== 'production';
//Create next app instance
const app = next({ dev });

const handle = app.getRequestHandler();

//Connect mongodb database
mongoose.createConnection(process.env.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connection established.");
        console.log("DATABASE URL", process.env.DATABASE_URL);
    })
    .catch(() => {
        console.log("Database connection error.");
        console.log("DATABASE URL", process.env.DATABASE_URL);
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
        server.use(cors({ origin: process.env.DOMAIN, credentials: true }))

        //Include post route
        const postRouter = require("./routes/posts.js");
        server.use("/api", postRouter);

        server.all('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(port, err => {
            if (err) throw err;
            console.log('App listening on port ', port);
            console.log(process.env.DATABASE_URL);
            console.log(process.env.NODE_ENV);
            console.log(process.env.DOMAIN);

        })
    })