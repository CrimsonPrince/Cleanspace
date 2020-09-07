const express = require('express')
const Countries = require('../models/Country')
const pino = require('pino')
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

const router = express.Router()

router.get('/countries/', async (req, res) => {
    try {
        country = await Countries.getAll()
        logger.info(country)
        res.send(country)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/countries/:countryId', async (req, res) => {
    try {
        country = await Countries.findCountryByCode(req.params.countryId)
        res.send(country)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router