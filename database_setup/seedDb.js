import mongoose from 'mongoose';
import * as fs from 'fs';
import getDbConnectionString from '../config/index.js';
import Todo from '../models/todoModel.js';
import { colors, colorLog } from '../utils/nodeColors.js'

main().catch(err => console.log('Error: ', err));

async function main() {
    console.log("seed it!");

    // Enable Node in ESM mode to import JSON?
    try {
        colorLog(colors.yellow, 'Loading seed data...');
        const seedData = JSON.parse(fs.readFileSync('./database_setup/seedData.json'));
        colorLog(colors.green, 'Seed data loaded');

        colorLog(colors.yellow, 'Connecting to database...');
        mongoose.connect(getDbConnectionString());
        colorLog(colors.green, 'Connected to database');

        colorLog(colors.yellow, 'Creating seed data...');
        const result = await Todo.create(seedData.data);
        colorLog(colors.green, "Create result:\n", result);

        mongoose.disconnect();
    } catch (error) {
        colorLog(colors.red, 'An error occured:\n');
        console.log(error);
    }
}