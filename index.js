//request - respons   talep-cevap  => server

//http server oluşturuyoruz

var http = require("http")  //node modüles => http, fs, os

var server =http.createServer((req,res) =>{
    console.log(req.url)

    res.end();
})

server.listen(3000, ()=>{
    console.log("node.js server at port 3000")
});
