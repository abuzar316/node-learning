const express = require("express");
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req , resp)=>{
    const db = await dbConnect();
    const data = await db.find().toArray();
    resp.send(data)
})

app.post('/' , async (req,resp)=>{
    let db = await dbConnect();
    let result = await db.insert(req.body);
    resp.send(result);
})

app.put('/', async (req , resp)=>{
    const data = await dbConnect();
    const result = await data.updateOne(
        {name : 'J2'},
        {$set : {price : 7000}}
    )
    console.log(result)
})



app.listen(8000);