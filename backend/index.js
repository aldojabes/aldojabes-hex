import express from "express";
import applicationroutes from "./routes/applicationRoutes.js";
import cors from "cors";
 
const app = express();
 
app.use(cors());
app.use(express.json());
app.use('/calculate', applicationroutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));

export default { app };