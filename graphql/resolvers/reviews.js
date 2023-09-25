const Review = require("../../Model/Review")
const Movie = require("../../Model/Movie")
const { AuthenticationError, UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');

module.exports = {
    Mutation: {

        async addReview(_, {imdbId, body},  context) {
            const user = checkAuth(context)
            if (body.trim() === "") {
                throw new UserInputError('Empty review', {
                    errors: {
                        body: 'Review body must not empty'
                    }
                });
            }
            const movie = await Movie.findOne({imdbId})

            if (movie) {
                const newReview = new Review({
                    body,
                    createdAt: new Date().toISOString(),
                    createdBy: user.id
                })
                const res = await newReview.save();
                movie.reviewIds.unshift(newReview);
                await movie.save();
                return res;
            } else {
                throw new UserInputError('Movie not found');
            }


        }
    }
}
