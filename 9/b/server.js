const http = require("node:http")

const server = http.createServer((req,res) =>{
  res.writeHead(222, {"constent-type" :"text/plain"})
  res.end("szczepan r")
})

server.listen(5000, "localhost" ,()=>{console.log("running on port 5000")})
