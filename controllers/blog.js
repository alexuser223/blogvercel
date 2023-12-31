const blogschema = require("../model/blogmodel");

const homepage = async (req,res)=>{

    const myData = await blogschema.find(req.query);
    // console.log("this is working",req.query)

    res.status(200).json(myData)

}
const homepagetest = async (req,res)=>{

    res.status(200).send("test")

}


module.exports= {homepage,homepagetest};