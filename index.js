const express = require('express');
const app = express();
const port = 3000;
const slist=require('./data.json');

app.use(express.json());
app.get('/getdata', (req,res)=>
    {res.send(slist);
}
)

app.post('/insertdata/:name', (req,res)=>{
    console.log(req.body);
    res.send({
        "status":"data inserted successfully",
        "statuscode":200,
        "data":req.params.name
    });
})


app.put('/updatedata', (req,res)=>{
    console.log(req.body);
    res.send({
        "status":"data inserted successfully",
        "statuscode":200,
        "data":req.query.name
    });
})
app.delete('/deletedata/:id', (req,res)=>{
    console.log(req.body);
    res.send({
        "status":"data deleted successfully",
        "statuscode":200,
        "data":req.params.name
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});