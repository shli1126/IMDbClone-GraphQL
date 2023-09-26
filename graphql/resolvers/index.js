const moviesResolvers = require('./movies')
const usersResolvers = require('./users')
const reviewsResolvers = require('./reviews')
module.exports = {
    Query: {
        ...moviesResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...reviewsResolvers.Mutation
    }
}
