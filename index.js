import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get("/" , (req , res)=>{
    return res.send("<h1>Nodejs And MySql</h1>")
});




app.listen(3000 , (req , res)=>{
    console.log("server is starting on port 3000!");
});


