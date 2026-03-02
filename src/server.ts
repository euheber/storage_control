import { app } from "./app";
import {env} from "../src/env/index"

app.listen({port: env.PORT, host: "0.0.0.0"}).then(()=> {

    console.log("servidor rodando na porta 3000")
})