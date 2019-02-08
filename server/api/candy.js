const router = require('express').Router()
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
    try {
      const candies = await Candy.findAll();
      res.json(candies);
    } catch (err) {
      next(err);
    }
  });

module.exports = router
