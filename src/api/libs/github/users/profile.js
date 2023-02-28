const { info } = require('../../../libs/logger')
const ajax = require('../ajax')

module.exports = ({ auth }) => {
  info('libs/github/users/profile', { auth })

  return ajax({
    auth,
    method: 'POST',
    path: '/user',
  })
}
