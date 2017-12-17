// var mongoose    = require('mongoose'),
//     Promise    = require('bluebird')

// module.exports = (URI) => {

//     console.log ( "   DB URI >", URI )


//     //initialize models
//     require('./models/coin')
//     require('./models/user')
//     require('./models/exchange')
//     require('./models/ticker')


//     return new Promise((resolve, reject) => {
//       db.on('connected', () => console.log('MongoDB connected!'))
//       db.on('open', resolve) //happens after models are loaded
//       db.on('error', reject)
//     })

//     // DB connection, use prod db if running prod
//     var db = mongoose.connect(URI).connection

//     console.log ('db', db )


//     var promise = mongoose.connect('mongodb://localhost/myapp', {
//       useMongoClient: true
//     }).then( (db) {
//       console.log ( 'loaded' )
//       // Use `db`, for instance `db.model()`
//     })
// }

// var mongoose    = require('mongoose'),
//     Promise    = require('bluebird')

// module.exports = (URI) => {

//     console.log ( "   DB URI >", URI )

//     // DB connection, use prod db if running prod
//     var db = mongoose.connect(URI, {
//         useMongoClient: true,
//         promiseLibrary: Promise
//     })
//     var db = mongoose.connection;

//     //initialize models
//     require('./models/user')
//     require('./models/coin')
//     require('./models/exchange')
//     require('./models/ticker')
//     require('./models/record')

//     return new Promise((resolve, reject) => {
//       db.on('connected', () => console.log(`MongoDB connected at ${new Date()}`))
//       db.on('open', resolve) //happens after models are loaded
//       db.close(() => console.log(`Disconnected from Mongo at ${new Date()}`))
//       db.on('error', reject)
//     })
// }

var mongoose    = require('mongoose'),
    Promise    = require('bluebird');

let db 
module.exports = (URI) => {

    console.log ( " >>>>>>> **DB** URI >", URI );

    if ( !db ){ 
        db = mongoose.connect(URI).connection;
        // DB connection, use prod db if running prod
    
        //initialize models
        require('./models/user')
        require('./models/coin')
        require('./models/exchange')
        require('./models/ticker')
        require('./models/record')

        return new Promise((resolve, reject) => {
          db.on('connected', () => console.log('MongoDB connected!'));
          db.on('open', resolve); //happens after models are loaded
          db.on('error', reject);
        });
    } else {
        return new Promise((resolve, reject) => {
          return resolve()
        });
    }
};

