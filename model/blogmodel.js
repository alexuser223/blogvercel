const mongoose = require("mongoose");

const blogschema = new mongoose.Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "Unique_Id": {
      
        "type": "Date"
      
    },
    "Title": {
      "type": "String"
    },
    "Keyword": {
      "type": "String"
    },
    "Description": {
      "type": "String"
    },
    "FeaturedImage": {
      "type": "String"
    },
    "tags": {
      "type": "String"
    },
    "Para_1": {
      "type": "String"
    },
    "Heading_1": {
      "type": "String"
    },
    "Heading_2": {
      "type": "String"
    },
    "Para_2": {
      "type": "String"
    },
    "Para_3": {
      "type": "String"
    },
    "Heading_3": {
      "type": "String"
    },
    "Para_4": {
      "type": "String"
    },
    "Heading_4": {
      "type": "String"
    },
    "Para_5": {
      "type": "String"
    },
    "Writer": {
      "type": "String"
    },
    "Designation": {
      "type": "String"
    },
    "Date_Time": {
      "type": "Date"
    },
    "title_string": {
      "type": "String"
    },
    "Url": {
      "type": "String"
    }
  })


    module.exports = mongoose.model("post",blogschema);