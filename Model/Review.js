const { model, Schema } = require('mongoose')

const reviewSchema= new Schema({
   body: String
})
module.exports = model('Review', reviewSchema)
