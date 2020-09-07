const mongoose = require('mongoose')
const pino = require('pino')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const citySchema = mongoose.Schema({
    name: { type: String },
    city: { type: String },
    country: { type: String },
    count: { type: Number },
    locations: { type: Number }
})

citySchema.statics.getAll = async () => {
    const cities = await Cities.find({})
    logger.info("Retrieved All Cities")
    return cities
}

citySchema.statics.findCityByName = async(cityName) => {
    const cities = await Cities.findOne({ name : cityName })
    if (!cities) {
        throw new Error({ Error: 'No City Found with This Name' })
    }
    logger.info("Found City with ID: " + cityName)
    return cities
}



const Cities = mongoose.model('Cities', citySchema)

module.exports = Cities