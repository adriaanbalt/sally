import mongoose from 'mongoose'

var UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    createdDate: {
        type: Date,
        default: new Date()
    },
    lastLoginDate: {
        type: Date,
        default: new Date()
    },
    lastUpdateDate: {
        type: Date,
        default: new Date()
    },
    fbID: String,
    email: String,
    avatar: String,
    description: String,
    website: String,
    totalValue: Number,
    apiSecret: String,
    coinsWatched: [
        { 
            type: String,
            ref: 'Coin' 
        }
    ],
    coinsOwned: [
        { 
            type: String,
            ref: 'Coin' 
        }
    ],
    exchanges: { 
        type: String,
        ref: 'Exchange' 
    }
})

// set user schema on mongoose
mongoose.model('User', UserSchema)
