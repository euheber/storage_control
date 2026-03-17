import type { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../app";


export async function readProducts(request: FastifyRequest, reply: FastifyReply){

     const products = await prisma.products.findMany()


     reply.send(products).status(200)
}