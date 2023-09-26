const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    watchList: [
        {
            type: Schema.Types .ObjectId,
            ref: 'movies'
        }
    ]
})
module.exports = model('User', userSchema)
