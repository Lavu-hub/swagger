const database=require("../database10/db1")

const getteacher=async(req ,res)=>{
try{
const db=await database();
const collection=db.collection('teacher1');
const result=await collection.find().toArray();
res.send(result);
}
catch{
      res.send(err);
}}
const insertteacher=async(req,res)=>{
    try{
        
       console.log(req.body); 
       const db=await database();
       const collection =db.collection('teacher1');
       const result=await collection.insertOne(req.body);
       if(result.acknowledged==true)
       {
        res.send({
            "status":"Data inserted succesfulyy",
            "statuscode":200,
            "data":result
        })
       }
       else{
        res.send({
            "status":"oops:something went wrong",
            "statuscode":400,
        })
       }
    }
    catch(err)
    {
        res.send(err)
    }
}
const updateteacher=async(req,res)=>{
      try{
         console.log(req.query.name);
         const db= await database();
         const collection=db.collection('teacher1');
         const result=await collection.updateOne({name:req.query.name},{$set: req.body})
if(result.acknowledged==true)
       {
        res.send({
            "status":"Data updated succesfulyy",
            "statuscode":200,
            "data":result
        })
       }
       else{
        res.send({
            "status":"oops:something went wrong",
            "statuscode":400,
        })
       }
    }
    catch(err)
    {
        res.send(err)
    }
}
const deleteteacher=async(req,res)=>{
    try{
       console.log(req.params.name); 
       const db=await database();
       const collection =db.collection('teacher1');
       const result=await collection.deleteOne({name:req.params.name});
       if(result.acknowledged==true)
       {
        res.send({
            "status":"Data deleted succesfulyy",
            "statuscode":200,
            "data":result
        })
       }
       else{
        res.send({
            "status":"oops:something went wrong",
            "statuscode":400,
        })
       }
    }
    catch(err)
    {
        res.send(err)
    }
}
      
module.exports={getteacher,insertteacher,updateteacher,deleteteacher}