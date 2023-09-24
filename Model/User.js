const { model, Schema } = require('mongoose')
const Movie = require('./Movie')
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    watchList: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
})

module.exports = model('User', userSchema);
