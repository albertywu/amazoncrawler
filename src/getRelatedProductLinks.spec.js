const expect = require('expect')
const getRelatedProductLinks = require('./getRelatedProductLinks')

describe('#getRelatedProductLinks', function() {
  this.timeout(10000) // bump up timeout to 10 seconds (default is 2)

  it('should return an array of amazon product links', function(done) {

    const PRODUCT_URL = 'https://www.amazon.com/AmazonBasics-Powered-Computer-Speakers-A100/dp/B00GHY5F3K/ref=lp_172471_1_1'

    getRelatedProductLinks(PRODUCT_URL)
      .then(urls => {
        expect(urls.length).toBeGreaterThan(0)
        expect(typeof urls[0]).toBe('string')
        expect(urls[0].indexOf('https://www.amazon.com/')).toBe(0)
      })
      .finally(done)
  })
})