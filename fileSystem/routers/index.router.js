import productsManager from "../managers/products.manager.js";

async function router(req, res) {
  const url = req.url;
  const options = { "content-Type": "text/plain" };

  switch (url) {
    case "/":
      res.writeHead(200, options).end("Api conected");
      break;
    case "/products":
      const data = await productsManager.readFileProducts();
      res.writeHead(202, options).end(JSON.stringify(data));
      break;
    case "/products/create":
      const oneProductCreate = {
        title: "prod",
        price: "1000",
      };
      const id = await productsManager.creatOneProduct(oneProductCreate)
      res.writeHead(201, options).end(JSON.stringify(id));
    default:
      res.writeHead(404, options).end("Endpoint Not Found");
      break;
  }
}

export default router;
