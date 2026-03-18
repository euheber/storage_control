import type { FastifyReply, FastifyRequest } from "fastify";
import {productSchema} from "../../schemas/create-products-schema"
import { prismaDependency } from "../../repository/prisma";

export async function createProducts(request: FastifyRequest, reply: FastifyReply){

    const prisma = new prismaDependency()
    const productInfo = productSchema.parse(request.body)

    await prisma.createProduct({...productInfo})

    
    return reply.send("Tudo ok").status(200)
}