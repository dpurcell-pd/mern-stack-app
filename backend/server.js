const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
const app = express();

const {errorHandler} = require('./middleware/errorMiddleware');

connectDB();

//middleware
//used to allow retrieval of the req.body data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const goalRoutes = require('./routes/goalRoutes');
const userRoutes = require('./routes/userRoutes');

//middleware
//use goalRoutes to handle any /api/goals endpoints
app.use('/api/goals', (goalRoutes));
app.use('/api/users', (userRoutes));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));

