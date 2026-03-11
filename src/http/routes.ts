import { FastifyInstance } from "fastify";
import { createProducts } from "./controllers/create-product";

export async function routes(app: FastifyInstance){

    app.get("/home", createProducts)

}