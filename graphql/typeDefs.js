const {gql} = require("apollo-server")

module.exports = gql`
    type Movie {
        imdbId: String!,
        title: String!,
        releaseDate: String!,
        trailerLink: String!,
        genres: [String]!,
        poster: String!,
        backdrops: [String]!,
    }
    type User {
        id: ID!,
        token: String!
        username: String!,
        email: String!,
        password: String!,
        createdAt: String!,
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getMovies: [Movie]
    }
    type Mutation {
        register(registerInput: RegisterInput!): User!
        login(username: String!, password: String!): User!
    }
`
