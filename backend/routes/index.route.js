import express  from "express"; 


const app = express();
const router = express.Router();

const pageone = require("./user.route.js");
const list= require("./account.route.js");


router.use("/page1",pageone);
router.use("/list",list);

module.exports = router;