import mongoose from 'mongoose'
import Promise from 'bluebird'

class Database {
	constructor() {
		this.collections = {}
	}
	create( URI ) {
		console.log ( " >>>>>>> **DB** URI >", URI );
	    if ( !this.db ){ 
			console.log ( ' >>>>>>> create new DB' )
	        this.db = mongoose.connect(URI).connection;
	        // DB connection, use prod this.db if running prod
	    
	        //initialize models
	        require('./models/user')

	        return new Promise((resolve, reject) => {
	          this.db.on('connected', () => console.log('MongoDB connected!'));
	          this.db.on('open', resolve); //happens after models are loaded
	          this.db.on('error', reject);
	        });
	    } else {
	    	console.log ( ' >>>>>>> existing DB' )
	        return new Promise((resolve, reject) => {
	          return resolve()
	        });
	    }
	}
	getDB(){
		return this.db
	}
}
module.exports = Database