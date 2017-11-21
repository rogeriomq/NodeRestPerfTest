const fastify = require('fastify')()
fastify.get('/', function(request, reply) {
  reply.send('Hello World!')
})
fastify.listen(8000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})