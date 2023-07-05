import  express  from "express";
import indexRouters from "./routers/index.routes.js"
import { dirname, join } from "path"
import { fileURLToPath } from "url";


const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app .use(express.static("public"))

app.set('view engine', 'ejs')
app.set('views', join(__dirname,'views'))
app.use(express.static(join(__dirname,'public')))




app.use(indexRouters)

app.listen(3000)



console.log("puerto 3000")