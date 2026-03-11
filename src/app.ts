import fastify from "fastify";
import {PrismaClient} from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";
import { routes } from "./http/routes";

const app = fastify()
const connectionString = `${env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})
const prisma = new PrismaClient({adapter})

app.register(routes, {prefix: "api/v1"})

export {app, prisma}


