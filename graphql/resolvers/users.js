const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const {SECRET_KEY} = require('../../config')
const {validateRegisterInput, validateLoginInput} = require('../../util/validators')
const {UserInputError} = require('apollo-server')
const User = require("../../Model/User")

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username
        }, SECRET_KEY, {expiresIn: '1h'}
    )
}


module.exports = {
    Mutation: {
        async register(
            _,
            {
                registerInput: {username, email, password, confirmPassword}
            }
        ) {
            const {errors, valid} = validateRegisterInput(username, email, password, confirmPassword)
            if (!valid) {
                throw new UserInputError("Errors", {errors})
            }

            const user = await User.findOne({username});
            if (user) {
                throw new UserInputError("User name exist", {
                    errors: {
                        username: "Username exist"
                    }
                })
            }

            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = generateToken(res);

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}
