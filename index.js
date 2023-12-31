
const express = require("express");
const app =express();

app.set("view engine","ejs");
app.use(express.static('public'));  //images klasörü statik yapıda oldugu için kullanmak için dışarı açmak gerekiyor
app.use(express.static('node_modules'));  //bootstrap kurdugumuzda kullanmak için içinde oldugu node_modulesi dışarı açmak gerekiyor



const data =[
    {id:1,name:"iphone 14",price:30000, isActive:true,isHome:true,imageUrl:"1.jpg"},
    {id:2,name:"iphone 15",price:45000, isActive:true,isHome:true,imageUrl:"2.jpg"},
    {id:3,name:"iphone 16",price:40000, isActive:false,isHome:false,imageUrl:"3.jpg"},
    {id:3,name:"iphone 16",price:44000, isActive:true,isHome:true,imageUrl:"1.jpg"}
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