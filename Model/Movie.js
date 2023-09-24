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
    reviewsIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})
module.exports = model('Movie', movieSchema)
