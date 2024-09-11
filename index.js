let express = require('express');
let app = express()
 
app.get("/name",(req,res)=>{
  let myName = (req.query.name).toUpperCase();
  res.send(myName);
} );

let PORT= 3010
app.listen(PORT,()=>{
  console.log("app is running on", PORT)
})