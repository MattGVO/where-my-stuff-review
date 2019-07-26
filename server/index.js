const express = require('express')
const app = express()
const massive = require('massive')
const itemCtrl = require('./itemCtrl')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/items',itemCtrl.getItems)
app.post('/api/items',itemCtrl.createItem)

massive(CONNECTION_STRING).then( dbInstance =>{
    app.set('db',dbInstance)

    app.listen(SERVER_PORT, 
        () => console.log(`I found ${SERVER_PORT} things. just kidding I lost them`))
}).catch(err => console.log(err,"cannot connect to database"))

