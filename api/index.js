// get the express package setup
const express = require("express")

// create the router
const apiRouter = express.Router()

//--mounts /party route---
const partyRouter = require('./party')
// this will append path /parties to everything in the ./party file
apiRouter.use('/parties', partyRouter)

// or

// apiRouter.use('/parties', require('./party'))

// doing a module exports
module.exports = apiRouter
