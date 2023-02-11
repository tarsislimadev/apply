const login = require('./login')
const createuser = require('./createuser')
const describeuser = require('./describeuser')
const grantuser = require('./grantuser')
const revokeuser = require('./revokeuser')
const deleteuser = require('./deleteuser')
const deleteallusers = require('./deleteallusers')
const listallusers = require('./listallusers')
const createdir = require('./createdir')
const listdir = require('./listdir')
const publicdir = require('./publicdir')
const privatedir = require('./privatedir')
const deletedir = require('./deletedir')
const createfile = require('./createfile')
const listfile = require('./listfile')
const readfile = require('./readfile')
const writetext = require('./writetext')
const writefile = require('./writefile')
const deletefile = require('./deletefile')


module.exports = {
  login,
  createuser,
  describeuser,
  grantuser,
  revokeuser,
  deleteuser,
  deleteallusers,
  listallusers,
  createdir,
  listdir,
  publicdir,
  privatedir,
  deletedir,
  createfile,
  listfile,
  readfile,
  writetext,
  writefile,
  deletefile,
}
