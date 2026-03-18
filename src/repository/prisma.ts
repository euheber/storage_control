import { prisma } from "../app";
import type { ProductsCreateInput } from "../../generated/prisma/models";

export class prismaDependency { 
    
    async readProduct(){}

    async createProduct(product: ProductsCreateInput){
        await prisma.products.create({data:{
            ...product
        }})
    }

    async deleteProduct(){}
    async updateProduct(){}
}