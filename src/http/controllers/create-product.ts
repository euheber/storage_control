import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../app";
import type {ProductsCreateInput} from "../../../generated/prisma/models"
import {productSchema} from "../../schemas/create-products-schema"

export async function createProducts(request: FastifyRequest, reply: FastifyReply){
    const productInfo = productSchema.parse(request.body)


    return reply.send("Tudo ok").status(200)
}