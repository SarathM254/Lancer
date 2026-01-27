import  express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import cors from 'cors'
import bodyParser from 'body-parser';
import {Client} from "../models/Clients.js"

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err));
 

const app = express()
app.use(cors());
app.use(bodyParser.json()); 
const port = 3000

app.get('/api/server', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fallback for testing to see if server is running
app.get('/', (req, res) => {
    res.send("Server is running. Send requests to /api/server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)   
})

export default app;
//info is enough , but for vercel entire app is needed