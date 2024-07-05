const express = require("express")

const router = express.Router()

// api/party/
router.get("/", (req, res)=>{
    res.send("hello from party router!")
})

// router.get("/getall", (req, res)=>{
//     res.send("these are all the parties!")
// })

module.exports = router