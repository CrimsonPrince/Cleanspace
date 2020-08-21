const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    name: { type: String },
    city: { type: String },
    country: { type: String },
    count: { type: Number },
    locations: { type: Number }
})


const Cities = mongoose.model('Cities', citySchema)

module.exports = Cities