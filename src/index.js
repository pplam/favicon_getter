import request from 'request'
import cheerio from 'cheerio'
import url from 'url'

export default function fetchFavicon(pageUrl) {
  return new Promise((resolve, reject) => {
    request(pageUrl, (err, res, body) => {
      if (err) {
        reject(err)
      }

      const $ = cheerio.load(body)
      const faviconHref = $("link[rel='shortcut icon'], link[rel='icon']").first().attr('href')

      if (faviconHref) {
        resolve(url.resolve(pageUrl, faviconHref))
      } else {
        resolve(url.resolve(pageUrl, '/favicon.ico'))
      }
    })
  })
}
