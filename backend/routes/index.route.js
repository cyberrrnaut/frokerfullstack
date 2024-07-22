import express  from "express"; 


const app = express();
const router = express.Router();

import  pageone from "../controllers/pageone.controller.js" ;
import  list from  "../controllers/list.controller.js";


router.use("/page1",pageone);
router.use("/list",list);

export default router;
