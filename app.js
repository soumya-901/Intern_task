const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const middlewear = require('./middlewear');
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const DB = process.env.db;

app.use (express.json());
app.set("view engine" ,"ejs");
// app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get('/home',(req,res)=>{
  res.send("api works")
});

app.post("/create", middlewear.createToDo);
app.get("/delete/:id",middlewear.deleteToDo);
app.get("/" ,middlewear.allToDo);




mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("data base connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });

  
app.listen(PORT , ()=> {
  console.log(`server running on port `);
});