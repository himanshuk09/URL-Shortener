const express = require("express");
const router = express.Router();
const URL = require("../models/url");
router.get("/",async(req,res)=>{
    const allURL = await URL.find();
    
    return res.render("home",{
        urls :allURL,
    });
})




module.exports = router;
