const {MongoClient}=require('mongodb');
const url='mongodb+srv://Loveleen:lavi27881@cluster0.huvnxyp.mongodb.net'
// const url = "mongodb+srv://Loveleen:lavi27881@cluster0.huvnxyp.mongodb.net/?retryWrites=true&w=majority";
// const url= 'mongodb://localhost:27017'
const client=new MongoClient(url);

let db;
async function main()
{
    try{
        await client.connect();
        console.log('connected to mongodb');
        db=client.db('Loveleen');
        return db;
    }
    catch (err)
    {
        console.error("something is went wrong",err);

    }
}
module.exports=main