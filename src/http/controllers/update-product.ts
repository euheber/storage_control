import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../app";
import { updateProductSchema } from "../../schemas/update-product-schema";

export async function updateProduct(request: FastifyRequest, reply:FastifyReply){

  
    const {id, product} = updateProductSchema.parse(request.body)

    const data: any = {}

        if (product.name !== undefined) {
            data.name = product.name
        }

        if (product.tag !== undefined) {
            data.tag = product.tag
        }

    await prisma.products.update({where: { id }, data})

    return reply.send("product updated").status(200)

}