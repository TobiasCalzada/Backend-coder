import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema({
  title: { type: String, require: true },
  category: { type: String, default: "mate" },
  stock: { type: Number, default: 1 },
  price: { type: Number, default: 1 },
  photo: {
    type: String,
    defalt:
      "https://economipedia.com/wp-content/uploads/Definicion-de-Producto-1.jpg",
  },
});

const Product = model(collection, schema);
export default Product;
