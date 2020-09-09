const express = require('express')
const Measurements = require('../models/Measurements')
const pino = require('pino')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const router = express.Router()

router.get('/measurements/:type', async (req, res) => {
    try {
        measurement = await Measurements.getAllType(req.params.type)
        logger.info(measurement)
        res.send(measurement)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router