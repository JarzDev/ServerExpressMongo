import "dotenv/config";
import { connect } from "mongoose";

const DB_URI = 'mongodb://127.0.0.1:27017/express-mongo'
async function dbConnect(): Promise<void> {
    
    await connect(DB_URI);
}

export default dbConnect;