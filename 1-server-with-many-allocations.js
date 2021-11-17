const Fastify = require('fastify')
const fastify = Fastify({ logger: true })

function soManyAllocations() {
  const A = [];
  for (let i = 0; i < 10000; i++) {
    A.push(new Array(2000));
  }
  return A;
}

fastify.get('/', (req, reply) => {
  const arr = soManyAllocations()
  reply.code(200).send('Hello World')
})

fastify.listen(3000, (err) => {
  if (err) throw err
})
