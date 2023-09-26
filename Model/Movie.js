const { model, Schema } = require('mongoose')
const Review = require('./Review')
const movieSchema= new Schema({
    imdbId: String,
    title: String,
    releaseDate: String,
    trailerLink: String,
    genres: [String],
    poster: String,
    backdrops: [String],
    reviewIds: [
        {
            body: String,
            createdAt: String,
        }
    ]
})
module.exports = model('Movie', movieSchema)
