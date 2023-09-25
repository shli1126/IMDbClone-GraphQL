const { model, Schema } = require('mongoose')
const User = require("./User")
const reviewSchema= new Schema({
   body: String,
   createdAt: String,
   createdBy: {
      type: Schema.Types .ObjectId,
      ref: 'users'
   },
})
module.exports = model('Review', reviewSchema)
