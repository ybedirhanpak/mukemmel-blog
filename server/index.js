const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Get port
const port = process.env.PORT || 3000;
//Check if application is on production
const dev = process.env.NODE_ENV !== 'production';
//Create next app instance
const app = next({ dev });

const handle = app.getRequestHandler();

//Connect mongodb database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
.then(() => {
    console.log("Database connection established.");
})
.catch(() => {
    console.log("Database connection error.");
})

app
    .prepare()
    .then(() => {
        //Initialize express server
        const server = express();
        //Use middleware
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());

        //Include post route
        const postRouter = require("./routes/posts.js");
        server.use("/api", postRouter);

        server.all('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(port, err => {
            if (err) throw err;
            console.log('App listening on port ', port);
        })
    })