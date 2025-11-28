const express = require('express');
const app = express();
const port = 3000;
const slist=require('./data.json');
const fs = require('fs').promises
 app.use(express.json());

 app.get('/getdata', (req,res)=>
 {res.send(slist);
 })

 app.post('/insertdata',async (req,res)=>{
    try {
      slist.push(req.body)
       console.log(slist);
         await fs.writeFile('data.json', JSON.stringify(slist, null, 2), 'utf8');
     
      res.send({
        "status":"data inserted successfully",
        "statuscode":200,
        "data":slist
    });
   
    console.log('data inserted successfully');
  }
  
   catch (err) {
    console.error('Error writing files:', err);
      res.send({
        "status":"something went wrong",
        "statuscode":err,
        
    });
  }
 });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});