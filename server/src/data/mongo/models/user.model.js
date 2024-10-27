import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true},
  password: { type: String, require: true},
  role: { type: Number, require: true},
  isOnline:{ type: String, default: false},
  photo: {
    type: String,
    defalt:
      "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
  },
});

const User = model(collection, schema);
export default User;
