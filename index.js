
const express = require("express")
const app =express();

app.set("view engine","ejs")


const data =[
    {id:1,name:"iphone 14",price:30000, isActive:true},
    {id:2,name:"iphone 15",price:45000, isActive:true},
    {id:3,name:"iphone 16",price:40000, isActive:false},
    {id:3,name:"iphone 16",price:44000, isActive:true}
];

//!routes yapısı
app.use("/products/:id", function(req,res) {
    const urun = data.find(u => u.id ==req.params.id)
    res.render("product-details", urun)
})

app.use("/products", function(req,res) {
    res.render("products", {
        urunler: data
    });
});

app.use("/", function(req,res) {
    res.render("index")
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})