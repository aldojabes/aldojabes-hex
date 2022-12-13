import  express from "express";

import {MathController} from "../controllers/doMath.js";

const Router = express.Router();

Router.post('/',MathController)

export default Router