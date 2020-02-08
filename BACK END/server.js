
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 5000
app.use(express.json({
    type: ['application/json', 'text/plain']
  }))
app.post('/', (req,res) => {
    const {word} = req.body
    console.log(req.body)

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})