const { EMPTY, BLANK, EQUALS, INTERROGATION, E_COMMERCIAL, REGEXP } = require('../../constants')
const { info } = require('../logger')

class Request {
  constructor({ chunk }) {
    this.chunk = chunk.toString()
    this.method = this.parseMethod({ chunk })
    this.path = this.parsePath({ chunk })
    this.query = this.parseQuery({ chunk })
    this.headers = this.parseHeaders({ chunk })
    this.body = this.parseBody({ chunk })
  }

  splitLines({ chunk = EMPTY }) {
    info('libs/http/request/Request.splitLines', { chunk })

    return chunk.toString().split(REGEXP.NEWLINE)
  }

  parseFirstLine({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseFirstLine', { chunk })

    const [first = EMPTY] = this.splitLines({ chunk })
    return first.split(BLANK)
  }

  parseMethod({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseMethod', { chunk })

    const [method] = this.parseFirstLine({ chunk })
    return method.toString()
  }

  parseFullPath({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseFullPath', { chunk })

    const [, fullpath,] = this.parseFirstLine({ chunk })
    return fullpath.toString()
  }

  parsePath({ chunk = EMPTY }) {
    info('libs/http/request/Request.parsePath', { chunk })

    const fullpath = this.parseFullPath({ chunk })
    const [pathname] = fullpath.split(INTERROGATION)
    const [, ...path] = pathname.split(EMPTY)
    return path.join(EMPTY)
  }

  parseQuery({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseQuery', { chunk })

    const fullpath = this.parseFullPath({ chunk })
    const [, query = EMPTY] = fullpath.split(INTERROGATION)

    return query.split(E_COMMERCIAL).map((pair) => pair.split(EQUALS))
      .reduce((query, pair) => {
        const [key, ...values] = pair
        const value = values.join(EQUALS)

        if (key in query) { query[key].push(value) }
        else { query[key] = [value] }

        return query
      }, {})
  }

  parseHeaders({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseHeaders', { chunk })

    const [, ...lines] = this.splitLines({ chunk })
    return lines.map((line) => line.split(': ', 2))
      .reduce((headers, pair) => {
        const [key, value] = pair

        if (key in headers) {
          headers[key].push(value)
        } else {
          headers[key] = [value]
        }


        return headers
      }, {})
  }

  parseBody({ chunk = EMPTY }) {
    info('libs/http/request/Request.parseBody', { chunk })

    // FIXME
  }
}

module.exports = Request
