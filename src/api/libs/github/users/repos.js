const ajax = require('../ajax')

module.exports = ({ auth, user }) => ajax(
  'GET',
  `/user/${user}/repos`,
  [
    { key: 'Authorization', value: auth },
  ],
)
