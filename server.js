// server.js
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

//initialize Pusher with your appId, key, secret and cluster
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "829896",
    key: "13c554cffdee7cd2134a",
    secret: "fd3ebce3794b80994f36",
    cluster: "us2",
    encrypted: true
})


// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS middleware
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Pass to next layer of middleware
    next()
})

// Set port to be used by Node.js
app.set('port', (5000))

app.get('/', (req, res) => {
    res.send('Welcome')
})

// API route in which the price information will be sent to from the clientside
app.post('/prices/new', (req, res) => {
    // Trigger the 'prices' event to the 'coin-prices' channel
    pusher.trigger('coin-prices', 'prices', {
        prices: req.body.prices
    });
    res.sendStatus(200);
})

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'))
})
