const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

const {errorHandler} = require('./middleware/errorMiddleware');

//middleware
//used to allow retrieval of the req.body data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const goalsRoute = require('./routes/goalRoutes');

//middleware
//use goalRoutes to handle any /api/goals endpoints
app.use('/api/goals', (goalsRoute));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

