// This file is for connecting to a db that already exist

// in order to connect to a postgres database, we need to use the postgres package
const {Client} = require("pg")

// this create a DATABASE enviroment variable

// this will equal too, what is stored in .env or our own URL
// when we depoly it will have a different location
                                                                    // dont use no capitalize letters or special letters, _ are fine
let DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost:5432/kevins_parties"

//                        where the client is going to connect to, with security to help witj depolyment process
const client = new Client({connectionString:DATABASE_URL, ssl: process.env.NODE_ENV === "production"? {rejectUnauthorized:false}:undefined})

module.exports = client

// create the DB by typing createdb kevins_parties(has to match the DATABASE_URL name)
// to varify you can open pg admin
// I created the db but it's empty.....Let create tables yay!!