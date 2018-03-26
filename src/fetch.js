const axios = require('axios')

const config = require('./config.js')

module.exports = (the_required_param) => {
  const url = `${config.fetchUrl}?something=${the_required_param}`

  return axios.get(url, {
    // By default, Axios rejects its promise if the HTTP status it gets back is outside the 2xx range.
    // Prevent this, making axios resolve its promise for all HTTP status codes.
    validateStatus: status => true
  })
}
