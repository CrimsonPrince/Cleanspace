const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
    code: { type: String },
    name: { type: String },
    cities: { type: String },
    count: { type: Number },
    locations: { type: Number }
})


const Countries = mongoose.model('Countries', countrySchema)

module.exports = Countries