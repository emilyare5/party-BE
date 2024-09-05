//a file I will be running everytime i want to re-start the db and clear it

// this is like a import from the client file, require everything from that file
const client = require("./client")


// this is for me to test that everything is working
// in production I can delete this
async function rebuild(){
    try{
        client.connect(); /*connect to the db(client) */
        await dropTables(); /* everytime i want to re-start the db i need to drop all tables to clear it*/
        await createTables(); /* then re-create them */
        await createInitialData(); /* then add initial data */
    }catch(error){
        console.log("oh no!")
    }
}

rebuild().finally(()=> client.end) /* run the rebuild function, finally once its done, disconnect from the client(db) */