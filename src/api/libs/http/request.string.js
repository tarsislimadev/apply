module.exports = (method = '', path = '', headers = [], body = {}) => {
  const hs = headers.map(({ key, value }) => [key, value].join(': '))

  return [
    `${method} ${path} HTTP/1.1`,
    ...hs,
    '',
    JSON.stringify(body),
    '',
    '',
  ].join('\r\n')
}
