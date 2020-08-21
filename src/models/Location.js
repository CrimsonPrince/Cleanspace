const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    location: { type: String },
    country: { type: String },
    city: { type: String },
    count: { type: Number },
    sourceName: { type: String },
    firstUpdated: { type: String },
    lastUpdated: [{ type: String }],
    parameters: [{ type: String }],
    coordinates: [{ type: Number }]
})


const Locations = mongoose.model('Locations', locationSchema)

module.exports = Locations