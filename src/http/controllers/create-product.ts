import { FastifyReply, FastifyRequest } from "fastify";

export async function createProducts(request: FastifyRequest, reply: FastifyReply){


    
    return reply.send("Tudo ok").status(200)
}