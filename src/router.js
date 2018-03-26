const express = require('express')

const fetch = require('./fetch.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
  if (!req.query.the_required_param) {
    return res.status(400).json({
      error: 'You must specify the "the_required_param=SOME_VALUE" search parameter'
    })
  }

  try {
    const result = await fetch(req.query.the_required_param)

    return res.send({
      error: null,
      data: result.data.data
    })
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
