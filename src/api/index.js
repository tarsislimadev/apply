require('./init')

const netPkg = require('net')
const { PORT } = require('./config')

const app = require('./app')

const { Request, Response } = require('./libs/http')
const { info } = require('./libs/logger')
const { ApplicationError } = require('./libs/errors')

const server = netPkg.createServer((listener) => {
  const end = (data = '') => listener.end(data.toString())

  listener.on('data', (chunk) => {
    const response = new Response({})

    let resp = null

    try {
      const request = new Request({ chunk })

      resp = app.run(request, response)

      if (resp === undefined) {
        throw new ApplicationError('No response', { request, response, resp })
      }

    } catch (e) {
      resp = response.setError(e)
    }

    info('HTTP Response', { resp })

    end(resp)
  })
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
