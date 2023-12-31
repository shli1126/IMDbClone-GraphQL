const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const { MONGODB } = require('./config.js')
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req})
})

mongoose
    .connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connected');
        return server.listen({port: 4000})
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })


