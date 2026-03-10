import fastify from "fastify";
import {PrismaClient} from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";


const connectionString = `${env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})

const app = fastify()
const  prisma = new PrismaClient({adapter})


// ! Precisa fazer a string de conexao do PrismaClient
export {app, prisma}


