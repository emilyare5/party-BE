const express = require("express")

const router = express.Router()

// api/parties/
router.get("/", (req, res)=>{
    res.send("hello from parties router!")
})

// router.get("/getall", (req, res)=>{
//     res.send("these are all the parties!")
// })

module.exports = router