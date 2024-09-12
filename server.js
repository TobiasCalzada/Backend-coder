import router from "./router.js";
import {createServer} from "http";

//1. crear un servidor con el llamado al modulo htttp y agregando el metodo creatserver
const server = createServer(router);

//2. defino un puerto donde quiero que funcione el mi servidor
const port = 8000;

//3. defino la callback, que se ejecute cuando inicio el servidor
const ready = () => console.log("Server ready on port: " + port);

//4. inicio/levanto/corro el servidor
server.listen(port, ready);
