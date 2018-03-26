module.exports = (err, req, res, next) => {
  if (err) {
    console.log('Error handling middleware caught this error:')
    console.log(err)
    return res.status(500).send('There was an error')
  }
  throw new Error('This line of code should never run.  This is the error handling middleware.  It should only get called if one of your routes throws an error.  However, this time it was called it was not passed an error.')
}
