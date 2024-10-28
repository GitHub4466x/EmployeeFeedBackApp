import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import employeeRoutes from "./routes/employeeRoutes.js";
import feedBackRoutes from "./routes/feedBackRoutes.js";



config();
const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log("app running in port",PORT)
    })
}).catch((err) => {
    console.log(err,"hi")
})

app.use("/employee", employeeRoutes)
app.use("/feedback", feedBackRoutes)



  
export default app;