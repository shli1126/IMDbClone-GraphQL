const Movie = require("../../Model/Movie")
module.exports = {
    Query: {
        async getMovies() {
            try{
                const movies = await Movie.find();
                return movies
            } catch(err) {
                throw new Error(err)
            }
        }
    },
}
