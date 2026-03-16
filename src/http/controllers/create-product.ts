import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../app";
import {productSchema} from "../../schemas/create-products-schema"

export async function createProducts(request: FastifyRequest, reply: FastifyReply){
    const productInfo = productSchema.parse(request.body)

    await prisma.products.create({
        data: {...productInfo}
    })

    
    return reply.send("Tudo ok").status(200)
}