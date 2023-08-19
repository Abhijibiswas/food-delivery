//import express 
const express=require("express");

//creaating express server
const app= express();

const appRouting= require("./routes/appRouting")

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("./public"));//set a static file folder
//use==>middlewere,inject the funcionallity
app.use("/",appRouting);
// app.use('/admin',admitRouting);
// app.use('/customer',customerRouting);

const PORT =3032;
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
});
