const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(process.env.API_KEY)
  console.log('Server listening on port', PORT)
})
