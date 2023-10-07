const express= require('express')
const app = express()
const port= 8080
const route= require("./routers")
const cors = require('cors');
//config no-cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
  //app.use(cors)
  app.use(express.json())
  route(app)
  app.get('/', function(req, res){
      res.send("Hello world!");
    
    })
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  