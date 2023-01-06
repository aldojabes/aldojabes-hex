import express from "express";
import applicationroutes from "./routes/applicationRoutes.js";
import cors from "cors";


const PORT = process.env.PORT || 5000;
const app = express();
 
app.use(cors());
app.use(express.json());
app.use('/calculate', applicationroutes);
 
app.listen(PORT, () => console.log("Server running at port "+PORT));

export default { app };