const { NEWLINE, STATUS } = require('../constants')
const { ApplicationError } = require('../errors')
const { info, error } = require('../logger')

class Response {
  status = STATUS.OK
  headers = []
  body = { status: 'ok', message: null, data: {} }

  setError(e = new ApplicationError()) {
    error('setError', { e })

    const { stack } = e

    this.status = STATUS.SERVER_ERROR

    this.body.status = 'error'
    this.body.message = e.message
    this.body.data = { stack }

    if (e instanceof ApplicationError) {
      this.body.data.extras = e.extras
    }

    return this
  }

  setJSON(json = {}) {
    info('setJSON', { json })

    this.body.data = JSON.parse(JSON.stringify(json))

    return this
  }

  parseStatusMessage(status) {
    info('parseStatusMessage', { status })

    switch (status) {
      case 200: return 'OK'
      case 400: return 'CLIENT ERROR'
      case 404: return 'NOT FOUND'
      case 500: return 'SERVER ERROR'
    }

    return 'SERVER ERROR'
  }

  toJSON() {
    info('toJSON')

    return this.body
  }

  getBodyString() {
    info('getBodyString')

    return JSON.stringify(this.toJSON(), null, 4)
  }

  parseContentLength(body = '') {
    info('parseContentLength', { body })

    return +Buffer.from([...body]).lenght
  }

  getFirstLine() {
    info('getFirstLine')

    const { status } = this
    const statusMessage = this.parseStatusMessage(status)

    return (`HTTP/1.1 ${status} ${statusMessage}`)
  }

  getContentTypeLine() {
    info('getContentTypeLine')

    return 'Content-Type: application/json'
  }

  toString() {
    info('toString')

    const strArr = []
    strArr.push(this.getFirstLine())
    strArr.push(this.getContentTypeLine())
    strArr.push('')
    strArr.push(this.getBodyString())

    return strArr.join(NEWLINE)
  }
}

module.exports = Response
