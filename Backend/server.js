import  express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import {Client} from "../models/Clients.js"

let conn=await mongoose.connect('mongodb://localhost:27017/ClientsDB');


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

export default info;
