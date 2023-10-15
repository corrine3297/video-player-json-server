//import json-server
const jsonServer = require('json-server')

// create json server using json - server library
const MPServer = jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router("db.json")

// accessing middle ware
const middleware = jsonServer.defaults()

//set up port for server app
const port = 4000 || process.env.PORT

//use middleware  and router in server
MPServer.use(middleware)
MPServer.use(router)

//Server should listen for request from frontend
MPServer.listen(port, () => {
    console.log(`Media player server started at port: ${port},waiting for client request!!!`);
})