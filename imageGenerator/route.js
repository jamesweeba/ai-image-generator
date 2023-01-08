const express=require("express");
const router=express.Router();
const generateImages=require("./controller")


router.post("/",generateImages)





module.exports=router