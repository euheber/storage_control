import type { FastifyInstance } from "fastify";
import { createProducts } from "./controllers/create-product";
import { readProducts } from "./controllers/read-products";
import { deleteProduct } from "./controllers/delete-product";
import { updateProduct } from "./controllers/update-product";

export async function routes(app: FastifyInstance){
    
    app.get("/products", readProducts)
    app.post("/product", createProducts)
    app.delete("/product", deleteProduct)
    app.patch("/product", updateProduct)
}