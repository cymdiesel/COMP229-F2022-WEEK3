import {Router} from "express";
import { displayHomePage } from "../controllers/index.controller.server.js";

const router = Router(); // initializing the router 

router.get('/', displayHomePage);


export default router;

