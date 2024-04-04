import mongoose from 'mongoose';
import * as fs from 'fs';
import getDbConnectionString from '../config/index.js';
import Todo from '../models/todoModel.js';

main().catch(err => console.log('Error: ', err));

async function main() {
    console.log("seed it!");

    // Enable Node in ESM mode to import JSON?
    const seedData = JSON.parse(fs.readFileSync('./database_setup/seedData.json'));

    mongoose.connect(getDbConnectionString());
    const result = await Todo.create(seedData.data);
    console.log("Create result:\n", result);

    mongoose.disconnect();
}