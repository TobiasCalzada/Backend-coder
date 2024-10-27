import { Schema, Types, model } from "mongoose";

const collection = "carts";
const schema = new Schema({
  user_id: { type: Types.ObjectId, ref: "users", required: true },
  product_id: { type: Types.ObjectId, ref: "products", required: true },
  quantity: { type: Number, default: 1 },
  state: {
    type: String,
    default: "reserved",
    enum: ["reserved", "paid", "delivered"],
  },
});

const Cart = model(collection, schema);
export default Cart;
