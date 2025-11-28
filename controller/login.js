const database = require("../database10/db1");;
const jw=require('./auth')
const loginStudent = async (req, res) => {
  try {
    console.log(req.body);
    const db = await database();
    const collection = db.collection("register1");
    const result = await collection.findOne({ username: req.body.username });
    if (result) {
      if (result.password === req.body.password) {
      const token=  jw.generateToken({data:req.body.username})
        res.send({ status: "Login successfully", statuscode: 200,token:token });
      }

      else {
        res.send({ status: "Invalid Password", statuscode: 400, });
      }
    } else { res.send({ status: "User Not Found", statuscode: 402, }); }
  }
  catch (err) {
    console.error("Error during login:", err);
    res.status(500).send({ status: "Server Error", statuscode: 500, });
  }
};
module.exports = { loginStudent };