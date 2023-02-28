const { info } = require('../../libs/logger')
// const db = require('../../libs/db')
const github = require('../../libs/github/index')

module.exports = (_, res) => {
  info('actions/projects/list', { req, res })

  // const list = db.in('projects').listJSON()

  const list = github.projects.list()

  return res.setJSON({ list })

}
