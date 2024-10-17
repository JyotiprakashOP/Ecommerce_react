import express from 'express';
import dotenv from 'dotenv';
import './Models/db.js'; // Add the file extension
import authRouter from './Routes/authRoutes.js'; // Add the file extension

import bodyParser from 'body-parser';
import cors from 'cors';


dotenv.config();

const PORT = process.env.PORT || 8080;
const hostname = process.env.hostname;
const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`server is running at http://${hostname}:${PORT}`);
    
});
