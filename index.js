import  express  from "express";

const app = express()
const port = 9000;

app.get("/",(req,res)=>{
   res.json({message:"hello"})
})

app.listen(port,()=>{
   console.log(`http://localhost:${port}`);
})