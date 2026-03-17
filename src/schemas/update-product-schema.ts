import { z } from "zod";


export const updateProductSchema = z.object({
    id: z.string(),
    product: z.object({name: z.string(), tag: z.string()}).partial()
})
