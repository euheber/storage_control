import type { FastifyRequest, FastifyReply } from "fastify";

export async function deleteProduct(request: FastifyRequest, reply: FastifyReply){
    

    return reply.send("Deletar usuario").status(201)
}