import { app, prisma } from "./app";
import {env} from "../src/env/index"

app.listen({port: env.PORT, host: "0.0.0.0"}).then(()=> {


     prisma.products.create({data:{
        bar_code: "teste",
        name: "test",
        description: "lorem ipsuml",
        id: "test",
        identification_code: "test",
        tag: "hidraulica"
    }})
    console.log("servidor rodando na porta 3000")
})