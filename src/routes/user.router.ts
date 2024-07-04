import { FastifyInstance } from "fastify";

export async function userRouter(user: FastifyInstance) {
  user.post('/user', () => {
    console.log('create')
  })

  user.get('/', () => {
    console.log('get')
  })

  user.get('/:id', () => {
    console.log('unic')
  })
}