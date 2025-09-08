const express = require("express");
const app = express();
const cors = require("cors");


// app.use(express.urlencoded(true));
app.use(express.json());
app.use(cors());

const users = [];
app.get("/", (req, res)=>{
    res.send("Landing page");
})
app.post("/register", (req, res)=>{
    const id = Math.floor(Math.random()*1000000);
    const newUser = {id, ...req.body};
    users.push(newUser);
    console.log(req.body);
    res.send("successful");
});
app.get("/users", (req, res)=>{
    res.json("Users");
})

app.listen(8000, ()=>{
    console.log("my app is running out port 8000");
});