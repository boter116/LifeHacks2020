const express = require('express');
const app = express();
const helpers = require('./retrieve')
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})