const express = require('express');
const app = express();
require('dotenv').config();

const dbConfig = require('./config/dbConfig');

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Node server started at port ${port}`);
})

// vinaypathrikar2328
// TiLGLTOrXZ9MQ4r2