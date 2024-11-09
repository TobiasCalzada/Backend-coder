import { Schema, Types, model } from "mongoose";

const collection = "carts";
const schema = new Schema({
  user_id: { type: Types.ObjectId, ref: "users", required: true },
  product_id: { type: Types.ObjectId, ref: "products", required: true },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true },
  state: {type: String,default: "reserved",enum: ["reserved", "paid", "delivered"],
  },
});

schema.pre(
  "find",
  function () {
      this.populate("user_id", "email -_id")
      this.populate("product_id", "title photo category")
  }
)
schema.pre(
  "findOne",
  function () {
      this.populate("user_id", "email -_id")
      this.populate("product_id", "title photo category")
  }
)
schema.pre(
  "findOneAndUpdate",
  function () {
      this.populate("user_id", "email -_id")
      this.populate("product_id", "title photo category")
  }
)
schema.pre(
  "findOneAndDelete",
  function () {
      this.populate("user_id", "email -_id")
      this.populate("product_id", "title photo category")
  }
)

const Cart = model(collection, schema);
export default Cart;
