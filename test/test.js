const expect = require('chai').expect
const axios = require('axios')

describe('/', () => {
  describe('Unsuccessful: User error', () => {
    let failureResult

    before(async () => {
      try {
        // !! fix this URL
        failureResult = await axios.get('http://localhost:3000/search?this_here_incorrect_query_param=unicorn', {
          // By default, Axios rejects its promise if the HTTP status it gets back is outside the 2xx range.
          // Prevent this, making axios resolve its promise for all HTTP status codes.
          validateStatus: status => true
        })
      }
      catch (err) {
        console.log('Error setting up test:')
        console.log(err)
      }
    })

    it('Should return HTTP status 400', () => {
      expect(failureResult.status).to.equal(400)
    })

    it('Should tell the user what they did wrong', () => {
      expect(failureResult.data.error).to.equal('You must specify the "the_required_param=YOUR_SEARCH_TERM" query parameter')
    })
  })
})
