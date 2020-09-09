const express = require('express')
const Cities = require('../models/City')
const pino = require('pino')
const Measurements = require('../models/Measurements')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const router = express.Router()

router.get('/cities/', async (req, res) => {
    try {
        city = await Cities.getAll()
        logger.info(city)
        res.send(city)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/cities/:cityName', async (req, res) => {
    try {
        city = await Measurements.getPast5Days(req.params.cityName)
        res.send(city)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/cities/:cityName/:type', async (req, res) => {
    try {
        city = await Measurements.getPast5DaysType(req.params.cityName, req.params.type)
        res.send(city)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router