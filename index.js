const express = require("express");
const app = express();
app.use(express.json());

app.listen(8000, (req, res)=>{
    console.log("server is litening on 8000");
})