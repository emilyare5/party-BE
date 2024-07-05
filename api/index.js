// get the express package setup
const express = require("express")

// create the router
const apiRouter = express.Router()

//--mounts /party route---
const partyRouter = require('./party')
// this will append path /party to everything in the ./party file
apiRouter.use('/party', partyRouter)

// doing a module exports
module.exports = apiRouter
