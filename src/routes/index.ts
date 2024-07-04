import { FastifyInstance } from "fastify";
import { userRouter } from './user.router'

export async function routes(fastify: FastifyInstance) {
  fastify.register(userRouter, { prefix: '/users' })
}