const database=require("../database10/db1")
const getCourseList= async(req, res) => {
    try{
        const db=await database();
        const collection=db.collection('course');
        const result=await collection.find().toArray();
      res.send(result);
    }
  catch(err)
  {
   res.send(err); 
  }
}


const insertCourse=async(req,res)=>{
        try{
            console.log(req.body);
            const db=await database();
            const collection=db.collection('course');
            const result=await collection.insertOne(req.body);
            if(result.acknowledged==true){
                res.send({
                    "status":"data inserted successfully",
                    "statuscode":200,
                    "data":result
                })
            }
            else{
                res.send({
                    "status":"opps some issue occur.Please try again....",
                    "statuscoe":400
                })
            }
        }
        catch(err){
            res.send(err);
        }
}


 
const updateCourse=async(req,res)=>{
    try{
        console.log(req.params.id);

        const db=await database();
            const collection=db.collection('course');
            const result=await collection.updateOne({id:req.query.id}, { $set: req.body} );
            if(result.acknowledged==true){
                res.send({
                    "status":"data updated successfully",
            "statuscode":200,
           
                    "data":result
                })
            }
            else{
                res.send({
                    "status":"opps some issue occur.Please try again....",
                    "statuscoe":400
                })
            }
        }
        catch(err){
            res.send(err);
        }

    }
const deleteCourse=async(req,res)=>{
    try{
        console.log(req.params.id);

        const db=await database();
            const collection=db.collection('course');
            const result=await collection.deleteOne({id:req.params.id});
            if(result.acknowledged==true){
                res.send({
                    "status":"data deleted successfully",
                    "statuscode":200,
                    "data":result
                })
            }
            else{
                res.send({
                    "status":"opps some issue occur.Please try again....",
                    "statuscoe":400
                })
            }
        }
        catch(err){
            res.send(err);
        }

    }



module.exports={getCourseList,insertCourse,updateCourse,deleteCourse}