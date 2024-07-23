import express  from "express"; 


const app = express();
const router = express.Router();

import  pageone from "../controllers/pageone.controller.js" ;
import  list from  "../controllers/list.controller.js";
import like from "../controllers/like.controller.js";


router.use("/page1",pageone);
router.use("/list",list);
router.use("/like",like)

export default router;
