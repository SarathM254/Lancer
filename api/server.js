import  express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import cors from 'cors'
import bodyParser from 'body-parser';
import {Client} from "../models/Clients.js"

let conn = await mongoose.connect(process.env.MONGODB_URI);                               
console.log("Connected to MongoDB Atlas - Database: ClientsDB");
 

const app = express()
app.use(cors());
app.use(bodyParser.json()); 
const port = 3000

let info=app.get('/', async (req, res) => {
  const data= await Client.find(); 
  res.json(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)   
})

export default app;
//info is enough , but for vercel entire app is needed