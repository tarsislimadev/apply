const fs = require('fs')
const path = require('path')

const isFile = (name) => fs.statSync(name).isFile()

const mkdirSync = (name) => fs.mkdirSync(path.resolve(name), { recursive: true })

const writeFileSync = (name, value = '') => fs.writeFileSync(name, value)

const readFileSync = (name) => isFile(name) ? fs.readFileSync(name) : ''

const readdirSync = (name) => [mkdirSync(name), fs.readdirSync(name)][1]

module.exports = {
  mkdirSync,
  writeFileSync,
  readdirSync,
  readFileSync,
}
