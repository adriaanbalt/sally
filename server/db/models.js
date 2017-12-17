import mongoose from 'mongoose'
import Promise from 'bluebird'
		
module.exports = () => {

	const User = mongoose.model('User')
	Promise.promisifyAll(User)
	Promise.promisifyAll(User.prototype)

	return {
		User,
	}
};
