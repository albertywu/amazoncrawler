const rp = require('request-promise')
const cheerio = require('cheerio')
const BASE_AMAZON_URL = 'https://www.amazon.com/'
const {resolve} = require('url')
const CAROUSEL_CLASS = 'a-carousel-row-inner'

// (uri: string) => Object
const options = (uri) => ({
  uri,
  transform: (body) => cheerio.load(body)
})

// finds all links inside all carousels on the page
// ($: Cheerio) => Promise<string[]>
const getProductPaths = ($) => $(`.${CAROUSEL_CLASS}`)
  .find('a')
  .toArray()
  .map(link => $(link).attr('href'))
  .filter(link => link !== '#')

// (path: string) => string
const makeAbsoluteUrl = path => resolve(BASE_AMAZON_URL, path)

// (paths: string[]) => string[]
const makeAbsoluteUrls = paths => paths.map(makeAbsoluteUrl)

// productUrl must be an Amazon product URL!
// (productUrl: string) => Promise<string[]>
module.exports = function getRelatedProductLinks(productUrl) {
  return rp(options(productUrl))
    .then(getProductPaths)
    .then(makeAbsoluteUrls)
}