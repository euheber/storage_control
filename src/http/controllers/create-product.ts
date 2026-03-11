import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../app";
import type {ProductsCreateInput} from "../../../generated/prisma/models"


export async function createProducts(request: FastifyRequest, reply: FastifyReply){
    
    return reply.send("Tudo ok").status(200)
}