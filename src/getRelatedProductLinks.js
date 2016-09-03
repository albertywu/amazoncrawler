const rp = require('request-promise')
const cheerio = require('cheerio')
const BASE_AMAZON_URL = 'https://www.amazon.com/'
const {resolve} = require('url')
const CAROUSEL_CLASS = 'a-carousel-row-inner'

// (uri: string) => Object
const getOptions = (uri) => ({
  uri,
  transform: (body) => cheerio.load(body)
})

// (path: string) => string
const getAbsoluteUrl = path => resolve(BASE_AMAZON_URL, path)

// (paths: string[]) => string[]
const getAbsoluteUrls = paths => paths.map(getAbsoluteUrl)

// finds all links inside all carousels on the page
// ($: Cheerio) => Promise<string[]>
function getProductPaths($) {
  return $(`.${CAROUSEL_CLASS}`)
    .find('a')
    .toArray()
    .map(link => $(link).attr('href'))
    .filter(link => link !== '#')
}

// productUrl must be an Amazon product URL!
// (productUrl: string) => Promise<string[]>
function getRelatedProductLinks(productUrl) {
  return rp(getOptions(productUrl))
    .then(getProductPaths)
    .then(getAbsoluteUrls)
}

module.exports = getRelatedProductLinks