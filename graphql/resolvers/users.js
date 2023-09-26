const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const {SECRET_KEY} = require('../../config')
const {validateRegisterInput, validateLoginInput} = require('../../util/validators')
const {UserInputError} = require('apollo-server')
const User = require("../../Model/User")
const checkAuth = require("../../util/checkAuth");
const Movie = require("../../Model/Movie");

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
        ,
        async login(_, {username, password}){
            const {errors, valid} = validateLoginInput(username, password)

            if (!valid) {
                throw new UserInputError('Input cannot be empty', {errors})
            }
            const user = await User.findOne({username})
            if (!user) {
                errors.general = "User not found";
                throw new UserInputError('User not found', {errors})
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = "Wrong password"
                throw new UserInputError('Wrong password', {errors});
            }
            const token = generateToken(user);
            return {
                ...user._doc,
                id: user._id,
                token
            }
        }
        ,
        async addToUserWatchList(_, {imdbId}, context){
            const userInfo = checkAuth(context)
            const movie = await Movie.findOne({imdbId})
            const user = await User.findById(userInfo.id)
            console.log(user)
            if (movie) {
                user.watchList.unshift(movie.id)
                await user.save();
                return user
            }
            else {
                throw new UserInputError('Movie not found');
            }
        }

    }
}
