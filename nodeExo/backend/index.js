const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users.js');
const mongoURI = "mongodb+srv://nbouzidi:XmbTH6QNQzbjH2QR@cluster0.yujln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));