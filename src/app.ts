import Fastify from "fastify"
import {routes} from './routes/index'

export const app = Fastify()

app.register(routes, { prefix: '/api/v1'})
