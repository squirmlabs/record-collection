// Dependencies
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// Controllers
import apiController from './controller/api';
// Express Application
const app = express();
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Mongoose Connection (messages is our database)
mongoose.connect('mongodb://localhost/messages');
// Routes
app.use('/api', apiController);
// Listening port
app.listen(5000);