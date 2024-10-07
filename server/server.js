import express from "express";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import { Server} from "socket.io";
import { createServer } from "http";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import socketCb from "./src/routers/index.socket.js";

try {
  const server = express();
  const port = 8000;
  const ready = () => console.log("server redy on port " + port);
  const httpServer = createServer(server)
  const tcpServer = new Server(httpServer)
  tcpServer.on("connection", socketCb)
  httpServer.listen(port, ready);


  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(cors());
  server.use("/public", express.static("public"));

  server.engine("handlebars", engine());
  server.set("view engine", "handlebars");
  server.set("views", __dirname + "/src/views");

  server.use(router);
  server.use(errorHandler);
  server.use(pathHandler);
} catch (error) {
  console.log(error);
}
