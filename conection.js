import dotenv from 'dotenv';
dotenv.config();
export const connectionUrl = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@ocemcomputer.gdmelig.mongodb.net/`;
