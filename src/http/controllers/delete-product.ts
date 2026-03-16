import type { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../app";
import { deleteProductSchema } from "../../schemas/delete-product-schema";

export async function deleteProduct(request: FastifyRequest, reply: FastifyReply){
    
    const {id} = deleteProductSchema.parse(request.body)

    await prisma.products.delete({where:{ id }})


    return reply.send("Deletar usuario").status(201)
}