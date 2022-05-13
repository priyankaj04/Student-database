import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouters from './routes/student.js'

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
app.use('/students', studentRouters)

const CONNECTION_URL = 'mongodb+srv://priyanka:priyankaj@cluster0.jdwle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
        console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})
