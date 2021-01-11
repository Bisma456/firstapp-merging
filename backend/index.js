const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
// app.use(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
const userRoute = require('./routes/api/users')
const PORT = 4000
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

app.use('/api/users', require('./routes/api/users'))