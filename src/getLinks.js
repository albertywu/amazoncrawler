const rp = require('request-promise')
const cheerio = require('cheerio')
const {resolve} = require('url')
const DEFAULT_URI = 'https://www.google.com'
const DEFAULT_SELECTOR = 'a'

// (uri: string) => Object
const getOptions = (uri) => ({
  uri,
  transform: (body) => cheerio.load(body)
})

// (path: string) => string
const getAbsoluteUrl = path => resolve(BASE_AMAZON_URL, path)

// (paths: string[]) => string[]
const getAbsoluteUrls = paths => paths.map(getAbsoluteUrl)

// (acc: string[], curr: string) => string[]
const deduper = (acc, curr) => acc.includes(curr) ? acc : acc.concat([curr])

// Returns all unique links on a given url
// TODO: make uniqueification an optional param
// (uri: string, selector: string) => Promise<string[]>
function getLinks(uri = DEFAULT_URI, selector = DEFAULT_SELECTOR) {
  return rp(getOptions(uri))
    .then($ => $('body')
    .find(selector)
    .toArray()
    .map(link => $(link).attr('href'))
    .filter(link => link !== '#')
    .filter(link => typeof link === 'string')
    .reduce(deduper, [])
  )
}

module.exports = getLinks