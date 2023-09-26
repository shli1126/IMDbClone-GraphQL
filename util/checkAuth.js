const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../config");
const {AuthenticationError} = require("apollo-server");
const User = require("../Model/User")
module.exports = (context) => {
    const authHeader = context.req.headers.authorization;

    if (authHeader) {
        const token = authHeader
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user
            } catch(err) {
                throw new AuthenticationError('Invalid/expired token')
            }
        }
        throw new Error("User not exist")
    }
    throw new Error("Authorization header must be provided")
}
