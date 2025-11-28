const database = require("../database10/db1")
const jw = require('./auth')
const getStudentList = async (req, res) => {
  try {

    const resultnew = jw.verifyToken(req.body.token);

    if (!resultnew.valid) {
      return res.status(401).json({ message: "Invalid token", error: result.message });
    }
    else {
      const db = await database();
      const collection = db.collection('lavi');
      const result = await collection.find().toArray();
      res.send(result);
    }
  }
  catch (err) {
    res.send(err);
  }
}


const insertStudent = async (req, res) => {
  try {
    const resultnew = jw.verifyToken(req.body.token);

    if (!resultnew.valid) {
      return res.status(401).json({ message: "Invalid token", error: result.message });
    }
    console.log(req.body);
    const db = await database();
    const collection = db.collection('lavi');
    const result = await collection.insertOne(req.body);
    if (result.acknowledged == true) {
      res.send({
        "status": "Data inserted succesfulyy",
        "statuscode": 200,
        "data": result
      })
    }
    else {
      res.send({
        "status": "oops:something went wrong",
        "statuscode": 400,
      })
    }
  }
  catch (err) {
    res.send(err)
  }
}

const updateStudent = async (req, res) => {
  try {
    const resultnew = jw.verifyToken(req.body.token);

    if (!resultnew.valid) {
      return res.status(401).json({ message: "Invalid token", error: result.message });
    }
    console.log("Updating student with name:", req.query.name);
    console.log("Request body:", req.body);


    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send({
        status: "Bad Request",
        message: "Request body is missing or empty"
      });
    }

    const db = await database();
    const collection = db.collection("lavi");

    const result = await collection.updateOne(
      { name: req.query.name },
      { $set: req.body }
    );

    if (result.matchedCount > 0) {
      res.send({
        status: "Data updated successfully",
        statuscode: 200,
        data: result,
      });
    } else {
      res.send({
        status: "No record found for given name",
        statuscode: 404,
      });
    }
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send({
      status: "Server error",
      statuscode: 500,
      error: err.message,
    });
  }
};



const deleteStudent = async (req, res) => {
  try {
    const resultnew = jw.verifyToken(req.body.token);

    if (!resultnew.valid) {
      return res.status(401).json({ message: "Invalid token", error: result.message });
    }
    console.log(req.params.name);
    const db = await database();
    const collection = db.collection('lavi');
    const result = await collection.deleteOne({ name: req.params.name });
    if (result.acknowledged == true) {
      res.send({
        "status": "Data deleted succesfulyy",
        "statuscode": 200,
        "data": result
      })
    }
    else {
      res.send({
        "status": "oops:something went wrong",
        "statuscode": 400,
      })
    }
  }
  catch (err) {
    res.send(err)
  }
}

module.exports = { getStudentList, insertStudent, updateStudent, deleteStudent }