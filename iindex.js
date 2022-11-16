const express = require('express');

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send('<h1>Student name is : ${name}, Student id is : ${id} </h1>');
});

app.listen(PORT, ()=>{
    console.log('Server is Running at http://localhost:${PORT}');
});
