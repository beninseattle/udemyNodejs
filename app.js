import express from 'express';
import mongoose from 'mongoose';
import getDbConnectionString from './config';
import setupController from './controllers/setupController'; 

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(getDbConnectionString());
setupController(app);

app.listen(port);