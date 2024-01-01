const blogschema = require("../model/blogmodel");

const homepage = async (req,res)=>{
    const requestData = req.query;
    // const para = {Unique_Id:Number(requestData.Unique_Id)};

    const myData = await blogschema.find(req.query);
    console.log("this is working",req.query)
    // console.log("this is working",para)

    res.status(200).json(myData)

}
const homepagetest = async (req,res)=>{

    res.status(200).send("test")

}


module.exports= {homepage,homepagetest};