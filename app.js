const express =  require("express");
const app = express();
const connectdb = require("./db/connect")
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const apiroute = require("./routes/blog");

app.get("/",(req,res)=>{

    res.send("You are in home directry and its working and again")
})

app.use("/api/blogs",apiroute);




const start= async ()=>{

    try{
        await connectdb();
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes Your app is connected Successfully`);
        });
    }catch(error){
        console.log(error)
    }

}


start();