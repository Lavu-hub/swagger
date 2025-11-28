const express = require('express');
const { swaggerUi, swaggerSpec } = require("./swagger");
const cors=require('cors')
const app = express();

const port=3000;
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
//const indexRouter=require('./routes/index1')
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//app.use('/',indexRouter);
    


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
