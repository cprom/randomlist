const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

//MONGODB CONNECTION
mongoose.connect(
    process.env.MONGODB_URI,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    }
);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB connection established successfully!');
});

//ROUTES
const listRouter = require('./routes/api/list');
app.use('/list', listRouter);

app.listen(process.env.PORT, ()=> {
    console.log('Server is running on port:' + process.env.PORT);
})