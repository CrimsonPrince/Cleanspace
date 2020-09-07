const mongoose = require('mongoose')
const pino = require('pino')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const countrySchema = mongoose.Schema({
    code: { type: String },
    name: { type: String },
    cities: { type: String },
    count: { type: Number },
    locations: { type: Number }
})

countrySchema.statics.getAll = async () => {
    const countries = await Countries.find({})
    logger.info("Retrieved All Countries")
    return countries
}

countrySchema.statics.findCountryByCode = async(countryId) => {
    const countries = await Countries.findOne({ code : countryId })
    if (!countries) {
        throw new Error({ Error: 'No Country Found with This ID' })
    }
    logger.info("Found Country with ID: " + countryId)
    return countries
}


const Countries = mongoose.model('Countries', countrySchema)

module.exports = Countries