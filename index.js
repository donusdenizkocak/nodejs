//request - respons   talep-cevap  => server

//http server oluşturuyoruz

var http = require("http")  //node modüles => http, fs, os
var fs =require("fs");

var server =http.createServer((req,res) =>{

    if(req.url=="/"){
        res.write("<h1>anasayfa</h1> ")
    }else if(req.url == "/urunler"){
        res.write("<h1>ürünler</h1> ")
    }else{
        res.write("sayfa bulunamadı ")
    }
    res.end();  //cevap göndermezsek tarayıcı işlev göstermez sürekli yeniliyor modunda olur res=response cevap demek. servere durdurmuş oldun
})

server.listen(3000, ()=>{
    console.log("node.js server at port 3000")
});
