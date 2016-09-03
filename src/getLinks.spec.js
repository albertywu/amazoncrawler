// tests here are intentionally very broad to prevent false positives
// since websites DOM structures are very unstable (change often)

const expect = require('expect')
const getLinks = require('./getLinks')

describe('#getLinks', function() {
  this.timeout(10000) // bump up timeout to 10 seconds (default is 2)

  describe('defaults', function() {
    it('should return links on https://www.google.com by default', function(done) {
      getLinks()
        .then(urls => {
          expect(urls.length).toBeGreaterThan(0)
          expect(typeof urls[0]).toBe('string')
        })
        .finally(done)
    })
  })

  describe('amazon', function() {
    it('should accept url', function(done) {
      const url = 'https://www.amazon.com/'

      getLinks(url)
        .then(urls => {
          expect(urls.length).toBeGreaterThan(0)
          expect(typeof urls[0]).toBe('string')
        })
        .finally(done)
    })

    it('should accept product url and a JQuery selector that wraps links of interest', function(done) {
      const url = 'https://www.amazon.com/AmazonBasics-Powered-Computer-Speakers-A100/dp/B00GHY5F3K/ref=lp_172471_1_1'
      const selector = '#sims-fbt-container a'

      getLinks(url, selector)
        .then(urls => {
          expect(urls.length).toBeGreaterThan(0)
          expect(typeof urls[0]).toBe('string')
        })
        .finally(done)
    })
  })

})