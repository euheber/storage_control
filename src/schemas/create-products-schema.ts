import {z} from "zod"

export const productSchema = z.object({
    identification_code: z.string(),
    bar_code : z.string(),
    name: z.string(),
    description: z.string(),
    tag: z.string()  
})