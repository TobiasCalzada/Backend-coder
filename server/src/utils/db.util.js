import { connect } from "mongoose";

async function dbConnect() {
  try {
    await connect(process.env.DB_LINK);
    console.log("mongo conect db")
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect