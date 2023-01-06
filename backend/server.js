const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const userreg=require("./routes/userreg");

const app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",userreg);


module.exports=app;
