import express from 'express';

import  colors  from 'colors';

import dotenv from 'dotenv';

import morgan from 'morgan';


// configuring env 
dotenv.config();

// rest objects
const app = express();

// rest api
app.get('/', (req, res) => {
    res.send(
        "<h1> Welcome to MedPlug</h1>"
    )
});


// PORT
const PORT = process.env.PORT || 8080;

// run listen 
app.listen(PORT, () => {
    console.log('server is running on ${PORT}'.bgCyan.white);
});