const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
    		http = require('http');

let httpPort = process.env.PORT || 5555
const app = express()
// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// Process application/json
app.use(bodyParser.json())
// Set static folder
app.use(express.static(path.join(__dirname, '../public')))
// allows cookie parsing (cookies are simple key value stores in the browser)
app.use(cookieParser()) 

app.set('port', httpPort )

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

