const mongoose = require('mongoose')
const pino = require('pino')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const measurementSchema = mongoose.Schema({
    parameter: { type: String },
    date: { type: { 
        local: { type: Number },
        utc: { type: Number }
    }},
    coordinates: { type: {
        longitude: { type: Number},
        latitude: { type: Number}
    }},
    value: { type: Number },
    unit: { type: String },
    count: { type: Number },
    location: { type: String },
    city: { type: String },
    country: { type: String },
    attribution: [{ type: String}],
    sourceName: { type: String }
})

measurementSchema.statics.getAllType = async(type) => {
    var date = new Date();
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    logger.info(date.toISOString());
    const measurements = await Measurements.find({ parameter: type, "date.utc": "2020-04-27T17:00:00.000Z"}).limit(2180)
    logger.info("Retrieved All Measurements")
    return measurements
}



const Measurements = mongoose.model('Measurements', measurementSchema)

module.exports = Measurements