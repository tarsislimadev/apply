const path = require('path')

const { info } = require('../logger')

const { mkdirSync, writeFileSync } = require('../fs')

const { v4: uuid } = require('../uuid')

class DatabaseObject {
  index = ''
  id = null
  dirname = null

  constructor(index, id = uuid()) {
    info('libs/db/DatabaseObject', { index, id })

    this.index = index

    this.id = id

    this.dirname = path.resolve(index, id)

    mkdirSync(this.dirname)
  }

  write(name, value = null) {
    info('libs/db/DatabaseObject.write', { name, value })

    const filename = path.resolve(this.dirname, name)

    writeFileSync(filename, value)

    return this
  }

  writeMany(props = {}) {
    info('libs/db/DatabaseObject.writeMany', { props })

    const self = this

    Object.keys(props)
      .filter(prop => !!prop && !!props[prop])
      .map((prop) => self.write(prop.toString(), props[prop].toString()))

    return this
  }
}

module.exports = DatabaseObject

