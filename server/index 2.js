const   express = require('express'),
        path = require('path'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        _ = require('lodash'),
    		logger = require('morgan'),
    		http = require('http'),
        socketIo = require('socket.io'),
        config = require('./config'),
        Workers = require('./workers')

require('dotenv').config()

const onError = function onError(error){
  if (error.syscall !== 'listen') {
    throw error
  }

  let port = this
  let bind = _.isString(port) && `Pipe ${port}` || `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES': {
      config.logger.crit(`${bind} requires elevated privileges.\n App will now exit!`)
      process.exit(1)
      break
    }
    case 'EADDRINUSE': {
      config.logger.crit(`${bind} is already in use.\n App will now exit!`)
      process.exit(1)
      break
    }
    default: {
      throw error
    }
  }
}

const onListening = function onListening(){
  let server = this
  const addr = server.address()
  let bind = _.isString(addr) && `Pipe ${addr}` || `Port ${addr.port}`
  config.logger.info(`onListening on ${bind}`)
}


const setup = function setup(){

  let httpPort = process.env.PORT || 5555
  const app = express()
  app.use(logger('dev'))
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
  // app.listen(app.get('port'), function() {
  //     console.log('running on port', app.get('port'))
  // })

  let httpServer = http.createServer(app)
  let onHttpError = _.bind(onError, httpPort)
  httpServer.on('error',onHttpError)
  let onHttpListening = _.bind(onListening, httpServer)
  httpServer.on('listening', onHttpListening)

  config.io = socketIo(httpServer)
  httpServer.listen(httpPort)

  let workers = new Workers()
  workers.start()
  // config.io.on('connection', (socket) => {  
  //   config.logger.info(`socket has connected`)
  //   workers.start( socket )
  //   socket.on('disconnect', () => {
  //     config.logger.info(`socket has disconnected`)
  //   })
  // })
} 


setup()