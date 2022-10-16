import {Router} from "express";
import { goodbyeWorld, helloWorld } from "../controllers/index.controller.server.js";

const router = Router(); // initializing the router 

router.get('/hello', helloWorld);
router.get('/goodbye', goodbyeWorld);

export default router;

