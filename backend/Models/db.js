import mongoose from 'mongoose'; // Use ES Module syntax
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load the environment variables from .env file

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
    console.error('Error: MONGO_CONN is not defined');
    process.exit(1); // Exit the process with an error code
}

mongoose.connect(mongo_url)
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Something went wrong while connecting to the database:', err);
    });
