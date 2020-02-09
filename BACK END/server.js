
const express = require('express');
const app = express();
const fs = require('fs');
const add = require('./CalendarScripts/quickAdd')
const PORT = process.env.PORT || 5000
app.use(express.json({
    type: ['application/json', 'text/plain']
  }))
app.post('/', (req,res) => {
    const {word} = req.body
    console.log(req.body)
    try {
      fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Calendar API.
        add.auth(JSON.parse(content), add.quickAdd, word);
        res.sendStatus(200)
      });
    } catch(e) {
      res.sendStatus(400)
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
