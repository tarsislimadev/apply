const stringify = require('../../libs/http/request.string')
const config = require('../../config')

const https = require('https')

module.exports = ({
  auth = '',
  method = 'GET',
  headers = [],
  port = 443,
  path = '/',
  body = {}
}) =>
  new Promise((resolve, reject) => {
    const url = 'https://api.github.com' + path

    const req = https.request({ method, port, path: url }, (res) => {
      res.on('data', (data) => {
        process.stdout.write(data)
        res.end()
        resolve()
      })

      res.on('error', err => reject(err))
    })

    req.on('error', err => reject(err))

    headers.push({ key: 'Accept', value: config.GITHUB.ACCEPT })
    headers.push({ key: 'X-GitHub-Api-Version', value: config.GITHUB.VERSION })

    headers.push({ key: 'Authorization', value: auth })

    req.write(stringify(method, path, headers, body))
  })
