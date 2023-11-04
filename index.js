const express=require("express")
const app=express()
const path=require("path")
const port=process.env.port || 3000;
const webPath=path.join(__dirname,"website")
app.use(express.static(webPath))

app.listen(port)