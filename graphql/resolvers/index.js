const moviesResolvers = require('./movies')
const usersResolvers = require('./users')
module.exports = {
    Query: {
        ...moviesResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}
