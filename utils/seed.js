// imports all required modules and data
const mongoose = require('mongoose');
const connection = require('../config/connection');
const User = require('../models/userModel');
const Thought = require('../models/thoughtModel');
const { seedUsers, seedThoughts } = require('./data');
//function to seed the DB
const seedDB = async () => {
    try{
        //connect to database
        await connection;
        //drops the existing database
        await mongoose.connection.dropDatabase();
        //adds seeded users into the db
        const users = await User.insertMany(seedUsers);
        //adds seeded thoughts into the db
        const thoughts = await Thought.insertMany(seedThoughts);
        // Log success message and close the database connection
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
    // Log error message and close the database connection in case of an error
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

//Start seeding the database
seedDB();
