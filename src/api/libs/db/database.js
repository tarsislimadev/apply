const path = require('path')

const fs = require('../fs')
const logger = require('../logger')

const DatabaseObject = require('./database-object')

class Database {
  dirname = ''

  constructor(dirname = '') {
    logger.info('libs/db/database/Database', { dirname })

    this.dirname = dirname

    return fs.mkdirSync(this.dirname)
  }

  list(dirname = '') {
    logger.info('libs/db/database/Database.list', { dirname })

    return fs.readdirSync(path.resolve(this.dirname, dirname)) || []
  }

  new() {
    logger.info('libs/db/database/Database.new')

    return new DatabaseObject(this.dirname)
  }

  in(dirname = '') {
    logger.info('libs/db/database/Database.in', { dirname })

    return new Database(path.resolve(this.dirname, dirname))
  }

  findById(dirname = '') {
    logger.info('libs/db/database/Database.findById', { dirname })

    const id = this.list().find((obj) => obj === dirname)

    if (!id) return null

    return new DatabaseObject(path.resolve(this.dirname, dirname), id)
  }

  listJSON() {
    logger.info('libs/db/database/Database.listJSON', {})

    const self = this

    return this.list()
      .map((dirname) => new DatabaseObject(self.dirname, dirname))
      .map((obj) => obj.toJSON())
  }
}

module.exports = Database
