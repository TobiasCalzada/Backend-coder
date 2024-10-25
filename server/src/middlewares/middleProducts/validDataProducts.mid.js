function priceStockP(req, res, next) {
  let { price, stock, category, photo } = req.body;

  if (!price) {
    price = 1;
  }

  if (!category) {
    category = "the category is not defined";
  }

  if (!stock) {
    stock = 1;
  }

  if (!photo) {
    photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbiifpjqr9_wFVcfaf6oR4WJYMOLzB__zEQ&s";
  }

  req.body.price = price;
  req.body.stock = stock;
  req.body.category = category;
  req.body.photo = photo;

  return next();
}

export default priceStockP;
