import {createServer} from "http";
import router from "./routers/index.router.js";

const server = createServer(router)
const port = 8000
const ready = console.log("server ready on port:" + port)

server.listen(port, ready)

