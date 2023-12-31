const mongoose = require("mongoose");

const uri = "mongodb+srv://mkpcpc28:Stylokk@postapi.3gdcg7t.mongodb.net/postapi?retryWrites=true&w=majority";

const connectdb = ()=>{
    console.log("connectdb");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}


module.exports = connectdb;