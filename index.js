// main backend server

// 1. setup
// using express to create our database, to make it more easier and automatic
// express is a framework

const express = require("express")
const app = express()
app.use(express.json())

// cors will help us with browers issue so we can test our code
// when we run code locally we dont have by default some sort of security
// our url is not https, it just http for our local host
const cors = require("cors")

// adding it to our express application
app.use(cors())

// dotenv will help with deployment
require("dotenv").config()

// 2. create an api router
// from the ./api folder
const apiRouter = require("./api")

// we will be adding /api to everything in the ./api folder
app.use("/api", apiRouter)



// 3. start the server
// run the npm run start-dev script
app.listen(8080, ()=> {
    console.log("server is up and running :D")
})
