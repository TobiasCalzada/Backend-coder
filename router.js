import productsManager from "./data/ProductsManager.js";

async function router(requerimientos, respuesta) {
  const url = requerimientos.url;
  const options = { "content-Type": "text/plain" };

  switch (url) {
    case ("/"):
      respuesta
      .writeHead(200, options)
      .end("Coder api conected");
      break;
    case ("/api/products"):
      try {
        const products = await productsManager.readAll()
        return respuesta
        .writeHead(200, options)
        .end(JSON.stringify(products))
      } catch (error) {
        respuesta
        .writeHead(error.statusCode || 404, options)
        .end("not found products")
      }
    default:
      respuesta
      .writeHead(404, options)
      .end("Endpoint no found");
  }
}

export default router;
